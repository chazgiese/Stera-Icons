// This file contains the main plugin code that runs in Figma
// It will be compiled to code.js

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface IconVariant {
  variant: {
    weight: string;  // "Regular" | "Bold" | "Fill"
    duotone: boolean;
  };
  svg: string;
  hash: string;
}

interface IconData {
  id: string;        // Stable icon id: the Figma component set key. Survives renames; the build detects renames with it
  name: string;
  tags: string[];
  categories: string[];
  variants: IconVariant[];
}

interface IconsExport {
  schemaVersion: string;
  exportedAt: string;
  totalIcons: number;
  icons: IconData[];
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

interface PreCheckResult {
  checkId: string;
  label: string;
  passed: boolean;
  message?: string; // populated on failure
  offendingComponents?: Array<{ name: string; id: string }>; // component sets with errors
}

// ============================================================================
// CONSTANTS
// ============================================================================

const SCHEMA_VERSION = "3.0.0";
const ALLOWED_WEIGHTS = ["Regular", "Bold", "Fill"];
const DUOTONE_VALUES = [false, true];
const REQUIRED_VIEWBOX = "0 0 24 24";

// Shape tags that are considered for deduplication and attribute ordering
const SHAPE_TAGS = new Set([
  'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon'
]);

// Attribute order written for shape elements. Figma does not keep its attribute order stable
// between releases (fill-rule and clip-rule moved from before d to after it), and the hash is
// computed on the string, so the order is fixed here. It matches what Figma wrote before the
// move, which keeps the hashes of existing icons unchanged. Attributes not listed keep their
// relative order after the listed ones
const SHAPE_ATTRIBUTE_ORDER = ['opacity', 'fill-rule', 'clip-rule', 'd', 'cx', 'cy', 'r', 'width', 'height', 'fill'];

// Attributes that suggest styling, references, or hooks and should not be deduplicated
const RISKY_ATTRIBUTES = new Set([
  'id', 'class', 'style', 'filter', 'mask', 'clip-path', 'clipPath', 'transform'
]);

const EXPORT_CONCURRENCY = 4;
const VARIANT_PROP_PRIORITY = ['Weight', 'Duotone', 'Variant', 'Style', 'Type'];
const YIELD_FREQUENCY = 5;

const NAME_SEPARATORS = ['/', '=', ' - '];

const MAX_CATEGORIES = 3;
const CATEGORY_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// Pre-check metadata
const PRE_CHECK_METADATA = {
  componentSets: {
    checkId: 'componentSets',
    label: 'Checking that every icon is a component set...'
  },
  duplicateNames: {
    checkId: 'duplicateNames',
    label: 'Checking for duplicate names...'
  },
  categories: {
    checkId: 'categories',
    label: 'Checking categories...'
  },
  layerNames: {
    checkId: 'layerNames',
    label: 'Checking layer names...'
  },
  fillsOnly: {
    checkId: 'fillsOnly',
    label: 'Checking for fills only (no strokes)...'
  },
  constraints: {
    checkId: 'constraints',
    label: 'Checking layer constraints...'
  }
};

// Shape node types that should be named "Vector"
const SHAPE_NODE_TYPES = new Set([
  'VECTOR', 'RECTANGLE', 'ELLIPSE', 'POLYGON', 'STAR', 'LINE', 'BOOLEAN_OPERATION'
]);

// ============================================================================
// HELPER UTILITIES
// ============================================================================

/**
 * Gets the base name for a component, checking parent component set first
 */
function getComponentBaseName(component: ComponentNode): string {
  // If component is part of a component set, use the set's name
  if (component.parent && component.parent.type === 'COMPONENT_SET') {
    return component.parent.name;
  }
  // Otherwise, extract base name from the component name
  return extractBaseName(component.name);
}

function extractBaseName(rawName: string): string {
  for (const separator of NAME_SEPARATORS) {
    if (rawName.includes(separator)) {
      return rawName.split(separator)[0].trim();
    }
  }
  return rawName.trim();
}

function deriveVariant(component: ComponentNode, baseName: string): { weight: string; duotone: boolean } {
  const variantProps = component.variantProperties;
  let weight = "Regular"; // default
  let duotone = false; // default

  // Helper to normalize property names (case-insensitive)
  const getProp = (props: Record<string, string> | null, propName: string): string | null => {
    if (!props) return null;
    const lowerPropName = propName.toLowerCase();
    for (const key of Object.keys(props)) {
      if (key.toLowerCase() === lowerPropName) {
        return props[key];
      }
    }
    return null;
  };

  // Extract weight from variant properties
  if (variantProps) {
    const weightValue = getProp(variantProps, 'Weight') || getProp(variantProps, 'Style') || getProp(variantProps, 'Variant');
    if (weightValue) {
      const normalizedWeight = weightValue.trim();
      // Normalize weight values (case-insensitive)
      if (ALLOWED_WEIGHTS.some(w => w.toLowerCase() === normalizedWeight.toLowerCase())) {
        weight = ALLOWED_WEIGHTS.find(w => w.toLowerCase() === normalizedWeight.toLowerCase()) || "Regular";
      } else {
        // Try to map legacy variant names to weights
        const lowerValue = normalizedWeight.toLowerCase();
        if (lowerValue.includes('bold')) {
          weight = "Bold";
        } else if (lowerValue.includes('fill')) {
          weight = "Fill";
        } else if (lowerValue.includes('regular') || lowerValue.includes('line')) {
          weight = "Regular";
        }
      }
    }

    // Extract duotone from variant properties
    const duotoneValue = getProp(variantProps, 'Duotone');
    if (duotoneValue) {
      const normalizedDuotone = duotoneValue.toString().trim().toLowerCase();
      duotone = normalizedDuotone === 'true' || normalizedDuotone === 'yes' || normalizedDuotone === '1';
    }
  }

  // Fallback: Try to extract from component name if variant properties didn't provide both values
  if (!variantProps || (!getProp(variantProps, 'Weight') && !getProp(variantProps, 'Duotone'))) {
    const fullName = component.name;
    
    // Check for duotone in name
    const nameLower = fullName.toLowerCase();
    if (nameLower.includes('duotone') || nameLower.includes('tone')) {
      duotone = true;
    }

    // Check for weight in name
    if (nameLower.includes('bold')) {
      weight = "Bold";
    } else if (nameLower.includes('fill')) {
      weight = "Fill";
    } else if (nameLower.includes('regular') || nameLower.includes('line')) {
      weight = "Regular";
    }

    // Try parsing from separators
    for (const separator of NAME_SEPARATORS) {
      if (fullName.includes(separator)) {
        const parts = fullName.split(separator);
        const lastPart = parts[parts.length - 1]?.trim().toLowerCase() || '';
        
        // Check for weight
        if (lastPart.includes('bold')) {
          weight = "Bold";
        } else if (lastPart.includes('fill')) {
          weight = "Fill";
        } else if (lastPart.includes('regular') || lastPart.includes('line')) {
          weight = "Regular";
        }
        
        // Check for duotone
        if (lastPart.includes('duotone') || lastPart.includes('tone')) {
          duotone = true;
        }
        break;
      }
    }
  }

  return { weight, duotone };
}

async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  iterator: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  if (items.length === 0) {
    return [];
  }

  const concurrency = Math.max(1, Math.min(limit, items.length));
  const results: R[] = new Array(items.length);
  let nextIndex = 0;

  const workers = Array.from({ length: concurrency }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex++;
      results[currentIndex] = await iterator(items[currentIndex], currentIndex);
    }
  });

  await Promise.all(workers);
  return results;
}

/**
 * The variant components of a component set
 */
function getVariantComponents(componentSet: ComponentSetNode): ComponentNode[] {
  return componentSet.children.filter((child): child is ComponentNode => child.type === 'COMPONENT');
}

interface PageComponents {
  componentSets: ComponentSetNode[];
  looseComponents: ComponentNode[];   // Components outside any set. Icons must be sets, so the pre-checks reject these
  allComponents: ComponentNode[];     // Set variants and loose components: everything the layer checks and fixes look at
}

/**
 * Collects the component sets and components on a page, the same lists that the
 * pre-checks, the fix handlers and the export work from
 */
function collectPageComponents(page: PageNode): PageComponents {
  const { components, componentSets } = getComponentsFromPage(page);
  const setChildIds = new Set(componentSets.flatMap(componentSet => getVariantComponents(componentSet).map(child => child.id)));
  const looseComponents = components.filter(component => !setChildIds.has(component.id));
  const allComponents = [...componentSets.flatMap(getVariantComponents), ...looseComponents];
  return { componentSets, looseComponents, allComponents };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Converts string to kebab-case
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen before capital letters
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Generates a stable hash for SVG content using a simple but effective algorithm
 * This provides consistent hashing for diffing and incremental builds
 */
function generateHash(input: string): string {
  let hash = 0;
  if (input.length === 0) return hash.toString(16);
  
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Convert to positive hex string, padded to 8 characters
  return Math.abs(hash).toString(16).padStart(8, '0');
}

/**
 * Processes and normalizes tags array
 */
function processTags(tagsString: string): string[] {
  if (!tagsString) return [];
  
  return tagsString
    .split(',')
    .map(tag => tag.trim().toLowerCase())
    .filter(tag => tag.length > 0)
    .filter((tag, index, array) => array.indexOf(tag) === index) // Remove duplicates
    .sort(); // Sort alphabetically
}

/**
 * Splits a description into its trailing [category, ...] list and the preceding tag string.
 * Category order is preserved because the first one is the primary.
 */
function parseDescription(description: string): { categories: string[]; tagsString: string } {
  const trimmed = (description || '').trim();
  const openIndex = trimmed.lastIndexOf('[');

  if (!trimmed.endsWith(']') || openIndex === -1) {
    return { categories: [], tagsString: trimmed };
  }

  const categories = trimmed
    .slice(openIndex + 1, -1)
    .split(',')
    .map(category => category.trim().toLowerCase())
    .filter(category => category.length > 0);

  return { categories, tagsString: trimmed.slice(0, openIndex).trim() };
}

/**
 * Validates the category syntax of a description.
 * Returns a short description of the first problem found, or null if valid.
 */
function findCategoryProblem(description: string): string | null {
  const trimmed = (description || '').trim();
  const hasBracket = (value: string) => value.includes('[') || value.includes(']');

  const openIndex = trimmed.lastIndexOf('[');

  if (!trimmed.endsWith(']')) {
    if (!hasBracket(trimmed)) return null;
    return openIndex > trimmed.lastIndexOf(']') ? 'missing closing ]' : 'brackets must be at the very end';
  }

  if (openIndex === -1) {
    return 'missing opening [';
  }

  const inner = trimmed.slice(openIndex + 1, -1);
  if (hasBracket(inner) || hasBracket(trimmed.slice(0, openIndex))) {
    return 'brackets must be at the very end';
  }

  // Validate the raw values (before lowercasing) so uppercase is reported
  const rawCategories = inner
    .split(',')
    .map(category => category.trim())
    .filter(category => category.length > 0);

  if (rawCategories.length === 0) {
    return 'empty category list';
  }
  if (rawCategories.length > MAX_CATEGORIES) {
    return `more than ${MAX_CATEGORIES} categories`;
  }

  const seen = new Set<string>();
  for (const category of rawCategories) {
    const key = category.toLowerCase();
    if (seen.has(key)) {
      return `duplicate category "${category}"`;
    }
    seen.add(key);
  }

  const invalid = rawCategories.find(category => !CATEGORY_PATTERN.test(category));
  if (invalid) {
    return `"${invalid}" is not lowercase kebab-case`;
  }

  return null;
}

/**
 * Allows the plugin to periodically yield so the Figma UI stays responsive
 * during long-running exports.
 */
function yieldToFigma(ms: number = 0): Promise<void> {
  return new Promise((resolve) => {
    // setTimeout is supported in the Figma plugin sandbox and lets us
    // cooperatively yield without changing export results.
    setTimeout(() => resolve(), ms);
  });
}

/**
 * Normalizes SVG string for consistent output and hashing
 */
function normalizeSVG(svgString: string): string {
  try {
    // Remove any existing whitespace and normalize
    let normalized = svgString
      .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
      .replace(/>\s+</g, '><') // Remove whitespace between tags
      .trim();
    
    // Ensure viewBox is present and correct
    if (!normalized.includes('viewBox=')) {
      normalized = normalized.replace(
        /<svg\b([^>]*)>/i,
        `<svg$1 viewBox="${REQUIRED_VIEWBOX}">`
      );
    } else {
      // Normalize existing viewBox
      normalized = normalized.replace(
        /viewBox\s*=\s*["']([^"']*)["']/i,
        `viewBox="${REQUIRED_VIEWBOX}"`
      );
    }
    
    // Remove unstable attributes that shouldn't affect the hash
    normalized = normalized
      .replace(/\s+id\s*=\s*["'][^"']*["']/gi, '') // Remove id attributes
      .replace(/\s+class\s*=\s*["'][^"']*["']/gi, '') // Remove class attributes
      .replace(/\s+data-[^=]*\s*=\s*["'][^"']*["']/gi, ''); // Remove data attributes
    
    // Normalize attribute spacing
    normalized = normalized.replace(/\s+/g, ' ').trim();

    return orderShapeAttributes(normalized);
  } catch (error) {
    console.error('Error normalizing SVG:', error);
    return svgString;
  }
}

/**
 * Rewrites every shape element with its attributes in SHAPE_ATTRIBUTE_ORDER.
 * An element whose attributes cannot be parsed back exactly is left untouched.
 */
function orderShapeAttributes(svgString: string): string {
  const shapeRe = new RegExp(`<(${Array.from(SHAPE_TAGS).join('|')})\\b([^>]*?)(/?)>`, 'g');
  const attrRe = /([A-Za-z_:][\w:.-]*)="[^"]*"/g;
  const rank = (name: string) => {
    const index = SHAPE_ATTRIBUTE_ORDER.indexOf(name);
    return index === -1 ? SHAPE_ATTRIBUTE_ORDER.length : index;
  };

  return svgString.replace(shapeRe, (element: string, tag: string, attrSrc: string, selfClose: string) => {
    const attrs: Array<{ name: string; raw: string }> = [];
    let m: RegExpExecArray | null;
    attrRe.lastIndex = 0;
    while ((m = attrRe.exec(attrSrc))) {
      attrs.push({ name: m[1], raw: m[0] });
    }
    if (attrs.map(attr => attr.raw).join(' ') !== attrSrc.trim()) {
      return element;
    }
    const ordered = attrs
      .map((attr, index) => ({ ...attr, index }))
      .sort((a, b) => rank(a.name) - rank(b.name) || a.index - b.index)
      .map(attr => attr.raw);
    return `<${tag}${ordered.length ? ' ' + ordered.join(' ') : ''}${selfClose}>`;
  });
}

/**
 * Deduplicates *exact* duplicate leaf shapes in an SVG string.
 * Safe-by-default: only removes elements proven visually redundant.
 * Works in Figma plugin (no DOM).
 */
function deduplicateSVG(svgString: string): string {
  const DEBUG_DEDUP = false;
  try {
    const svgMatch = svgString.match(/^<svg\b[^>]*>/i);
    if (!svgMatch) return svgString;
    const svgOpen = svgMatch[0];
    const svgClose = '</svg>';

    const start = svgOpen.length;
    const end = svgString.lastIndexOf(svgClose);
    if (end < start) return svgString;

    const body = svgString.slice(start, end);

    // Match self-closing or paired elements: <tag .../> OR <tag ...>...</tag>
    // We will only dedupe *leaf* shapes; paired-with-children will be kept.
    const elementRe = /<([A-Za-z_][\w:.-]*)(\s+[^>]*?)?\s*(\/>|>([\s\S]*?)<\/\1>)/g;

    // Quick helpers
    const collapseWs = (s: string) => s.replace(/\s+/g, ' ').trim();
    const stripNs = (tag: string) => tag.replace(/^[A-Za-z_]\w*:/, ''); // strip "svg:" etc.

    // Parse attributes into a sorted, normalized record
    const parseAttrs = (attrSrc = ''): Record<string,string> => {
      const out: Record<string,string> = {};
      // attr="..." | '...' | bare
      const attrRe = /([A-Za-z_:][\w:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/]+))/g;
      let m: RegExpExecArray | null;
      while ((m = attrRe.exec(attrSrc))) {
        const name = m[1];
        const val = m[2] || m[3] || m[4] || '';
        out[name] = val;
      }
      return out;
    };

    // Normalize attrs for hashing (ignore order & minor formatting)
    const normalizeAttrs = (attrs: Record<string,string>): Record<string,string> => {
      const norm: Record<string,string> = {};
      for (const [k, v] of Object.entries(attrs)) {
        let vv = v;
        // normalize whitespace
        vv = vv.replace(/\s+/g, ' ').trim();
        // normalize path data spacing (do NOT alter numbers/content)
        if (k === 'd') vv = vv.replace(/\s+/g, ' ').trim();
        norm[k] = vv;
      }
      return norm;
    };

    // Remove only when provably safe not to change rendering
    const isSafeToRemove = (tag: string, attrs: Record<string,string>, hasChildren: boolean): boolean => {
      if (hasChildren) return false; // only leaf nodes
      const t = stripNs(tag).toLowerCase();
      if (!SHAPE_TAGS.has(t)) return false;

      const a = attrs;
      const val = (k: string, def = '') => (a[k] || def).trim();

      // Anything that suggests styling, references, or hooks → keep
      for (const riskyAttr of RISKY_ATTRIBUTES) {
        if (a[riskyAttr]) {
          return false;
        }
      }
      if (Object.values(a).some(v => /url\(#/.test(v))) return false;

      // Opacity guards
      const full = (k: string) => (a[k] == null) || /^[01](?:\.0+)?$/.test(a[k] as string);
      if (!full('opacity')) return false;
      if (!full('fill-opacity')) return false;
      if (!full('stroke-opacity')) return false;

      // Strokes can change visual weight when doubled; require absence
      if (a['stroke'] != null && a['stroke'] !== 'none') return false;

      // OK to remove duplicates of pure fills at full opacity
      return true;
    };

    // Canonical key = tag + sorted attrs (name=value)
    const keyOf = (tag: string, attrs: Record<string,string>): string => {
      const t = stripNs(tag).toLowerCase();
      const norm = normalizeAttrs(attrs);
      const keys = Object.keys(norm).sort();
      // You can choose to *exclude* benign attrs from the key if desired.
      const pairs = keys.map(k => `${k}=${norm[k]}`);
      return `${t}|${pairs.join(';')}`;
    };

    const seen = new Set<string>();
    const out: string[] = [];
    let removed = 0;

    elementRe.lastIndex = 0;
    let m: RegExpExecArray | null;

    while ((m = elementRe.exec(body))) {
      const [, rawTag, rawAttrs = '', selfOrClose, inner = ''] = m;
      const tag = rawTag;
      const hasChildren = selfOrClose.startsWith('>'); // paired form
      const attrs = parseAttrs(rawAttrs);

      // Only dedupe safe leaf shapes; otherwise keep as-is
      if (isSafeToRemove(tag, attrs, hasChildren)) {
        const k = keyOf(tag, attrs);
        if (seen.has(k)) {
          removed++;
          continue; // drop duplicate
        }
        seen.add(k);
      }

      // Keep original element exactly as authored
      out.push(m[0]);
    }

    if (DEBUG_DEDUP && removed > 0) {
      console.log(`[deduplicateSVG] removed ${removed} duplicate element(s)`);
    }

    return `${svgOpen}${out.join('')}${svgClose}`;
  } catch (err) {
    console.error('[deduplicateSVG] error', err);
    return svgString;
  }
}

/**
 * Validates SVG content for tone variants and other requirements
 */
function validateSVG(svgString: string, variant: { weight: string; duotone: boolean }): ValidationResult {
  const errors: string[] = [];
  
  // Check basic SVG structure
  if (!svgString.trim().startsWith('<svg')) {
    errors.push('SVG does not start with <svg tag');
  }
  
  if (!svgString.trim().endsWith('</svg>')) {
    errors.push('SVG does not end with </svg> tag');
  }
  
  // Check for proper opening and closing tag balance
  const openTags = (svgString.match(/<svg[^>]*>/gi) || []).length;
  const closeTags = (svgString.match(/<\/svg>/gi) || []).length;
  if (openTags !== closeTags) {
    errors.push(`SVG tag mismatch: ${openTags} opening tags, ${closeTags} closing tags`);
  }
  
  // Check viewBox
  if (!svgString.includes(`viewBox="${REQUIRED_VIEWBOX}"`)) {
    errors.push(`Missing or incorrect viewBox. Expected: "${REQUIRED_VIEWBOX}"`);
  }
  
  // Non-duotone variants should not have fixed hex colors
  if (!variant.duotone) {
    const hexColorRegex = /fill\s*=\s*["']#[0-9a-fA-F]{3,6}["']/g;
    if (hexColorRegex.test(svgString)) {
      errors.push(`Non-duotone variant (weight: "${variant.weight}", duotone: ${variant.duotone}) should not contain fixed hex colors (fill="#...")`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// ============================================================================
// COMPONENT PROCESSING FUNCTIONS
// ============================================================================

/**
 * Gets all components and component sets from a page
 */
function getComponentsFromPage(page: PageNode): { components: ComponentNode[], componentSets: ComponentSetNode[] } {
  const components: ComponentNode[] = [];
  const componentSets: ComponentSetNode[] = [];

  function traverse(node: BaseNode) {
    if (node.type === 'COMPONENT') {
      components.push(node);
    } else if (node.type === 'COMPONENT_SET') {
      // Handle component sets (variants)
      componentSets.push(node);
      components.push(...getVariantComponents(node));
    }

    if ('children' in node) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }
  
  traverse(page);
  return { components, componentSets };
}

/**
 * Gets the description for an icon from its first component, falling back to
 * the parent component set.
 */
function getIconDescription(firstComponent: ComponentNode): string {
  // Convert markdown to plain text (remove markdown syntax)
  const markdownToPlainText = (markdownDesc: string): string => markdownDesc
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold **text**
    .replace(/\*(.*?)\*/g, '$1')     // Remove italic *text*
    .replace(/`(.*?)`/g, '$1')       // Remove code `text`
    .replace(/#{1,6}\s*/g, '')       // Remove headers # ## ###
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links [text](url)
    .replace(/\n/g, ', ')            // Replace newlines with commas
    .trim();

  // Note: There's a known bug in Figma where description field may appear missing
  // until nodes are re-published. We'll try both plain text and markdown versions.
  if ((firstComponent as any).description) {
    return (firstComponent as any).description;
  }
  if ((firstComponent as any).descriptionMarkdown) {
    return markdownToPlainText((firstComponent as any).descriptionMarkdown);
  }
  // Fallback: Check parent component set description (for component sets)
  if (firstComponent.parent && firstComponent.parent.type === 'COMPONENT_SET') {
    const componentSet = firstComponent.parent;
    if ((componentSet as any).description) {
      return (componentSet as any).description;
    }
    if ((componentSet as any).descriptionMarkdown) {
      return markdownToPlainText((componentSet as any).descriptionMarkdown);
    }
  }
  return '';
}

/**
 * Pre-check: Every icon must be a component set. The set's key is the icon's stable id,
 * so a loose component has no identity the build can track
 */
function runComponentSetsCheck(componentSets: ComponentSetNode[], looseComponents: ComponentNode[]): PreCheckResult {
  const MAX_ERRORS = 10;
  const offending: Array<{ name: string; id: string }> = [
    ...looseComponents.map(component => ({ name: component.name, id: component.id })),
    ...componentSets.filter(componentSet => !componentSet.key).map(componentSet => ({ name: `${componentSet.name}: missing component key`, id: componentSet.id }))
  ];

  if (offending.length === 0) {
    return {
      checkId: PRE_CHECK_METADATA.componentSets.checkId,
      label: 'All icons are component sets',
      passed: true
    };
  }

  const offendingComponents = offending.slice(0, MAX_ERRORS);
  const moreCount = offending.length > MAX_ERRORS ? ` (and ${offending.length - MAX_ERRORS} more)` : '';
  // "Component sets with errors:" is what the UI looks for to render the offending components as links
  const errorMessage = `Every icon must be a component set with Weight and Duotone variants; combine loose components as variants. Component sets with errors: ${offendingComponents.map(({ name }) => name).join(', ')}${moreCount}`;

  return {
    checkId: PRE_CHECK_METADATA.componentSets.checkId,
    label: 'Loose components detected',
    passed: false,
    message: errorMessage,
    offendingComponents
  };
}

/**
 * Checks for duplicate icon names across component sets, compared as the
 * kebab-case names the export emits. Keys are unique by construction; names
 * must be too, because the name is the icon's public API
 */
function checkForDuplicateNames(componentSets: ComponentSetNode[]): string[] {
  const nameCounts = new Map<string, number>();
  for (const componentSet of componentSets) {
    const name = toKebabCase(componentSet.name);
    nameCounts.set(name, (nameCounts.get(name) ?? 0) + 1);
  }

  return Array.from(nameCounts.entries())
    .filter(([, count]) => count > 1)
    .map(([name]) => name);
}

/**
 * Pre-check: Runs duplicate names check and returns a PreCheckResult
 */
function runDuplicateNamesCheck(componentSets: ComponentSetNode[]): PreCheckResult {
  const duplicateNames = checkForDuplicateNames(componentSets);
  
  if (duplicateNames.length === 0) {
    return {
      checkId: PRE_CHECK_METADATA.duplicateNames.checkId,
      label: 'No duplicate names found',
      passed: true
    };
  }
  
  const isPlural = duplicateNames.length > 1;
  const duplicateLabel = isPlural ? 'Duplicates' : 'Duplicate';
  const errorMessage = `${duplicateLabel}: ${duplicateNames.join(', ')}`;
  
  return {
    checkId: PRE_CHECK_METADATA.duplicateNames.checkId,
    label: 'Duplicate names detected',
    passed: false,
    message: errorMessage
  };
}

/**
 * Pre-check: Verifies the trailing [category, ...] list in each icon description is well-formed
 */
function runCategoriesCheck(componentSets: ComponentSetNode[]): PreCheckResult {
  const offending: Array<{ name: string; id: string }> = [];
  const MAX_ERRORS = 10;

  // Same icons, and same first component, that the export reads descriptions from
  for (const componentSet of componentSets) {
    const [firstComponent] = getVariantComponents(componentSet);
    if (!firstComponent) continue;
    const problem = findCategoryProblem(getIconDescription(firstComponent));
    if (problem) {
      offending.push({ name: `${componentSet.name}: ${problem}`, id: componentSet.id });
    }
  }

  if (offending.length === 0) {
    return {
      checkId: PRE_CHECK_METADATA.categories.checkId,
      label: 'Categories valid',
      passed: true
    };
  }

  const offendingComponents = offending.slice(0, MAX_ERRORS);
  const moreCount = offending.length > MAX_ERRORS ? `(and ${offending.length - MAX_ERRORS} more)` : '';
  const errorMessage = `Descriptions may end with up to ${MAX_CATEGORIES} lowercase kebab-case categories in [brackets]. Component sets with errors: ${offendingComponents.map(({ name }) => name).join(', ')}${moreCount ? ' ' + moreCount : ''}`;

  return {
    checkId: PRE_CHECK_METADATA.categories.checkId,
    label: 'Invalid categories detected',
    passed: false,
    message: errorMessage,
    offendingComponents
  };
}

/**
 * Pre-check: Verifies all shape layers inside components are named "Vector"
 */
function runLayerNamesCheck(components: ComponentNode[]): PreCheckResult {
  const offendingComponentSets = new Map<string, string>(); // name -> node ID
  const MAX_ERRORS = 10;
  
  function traverseNode(node: SceneNode, baseName: string, nodeId: string) {
    // Check if this is a shape node type
    if (SHAPE_NODE_TYPES.has(node.type)) {
      if (node.name !== 'Vector') {
        offendingComponentSets.set(baseName, nodeId);
      }
    }
    
    // Recursively traverse children if they exist
    if ('children' in node) {
      for (const child of node.children) {
        traverseNode(child, baseName, nodeId);
      }
    }
  }
  
  // Check all components
  for (const component of components) {
    const baseName = getComponentBaseName(component);
    // Get the component set node if it exists, otherwise use the component itself
    const targetNode = (component.parent && component.parent.type === 'COMPONENT_SET') 
      ? component.parent 
      : component;
    const nodeId = (targetNode as any).id;
    
    if ('children' in component) {
      for (const child of component.children) {
        traverseNode(child, baseName, nodeId);
      }
    }
  }
  
  if (offendingComponentSets.size === 0) {
    return {
      checkId: PRE_CHECK_METADATA.layerNames.checkId,
      label: 'All shape layers correctly named "Vector"',
      passed: true
    };
  }
  
  const componentSetList = Array.from(offendingComponentSets.entries()).slice(0, MAX_ERRORS);
  const offendingComponents = componentSetList.map(([name, id]) => ({ name, id }));
  const moreCount = offendingComponentSets.size > MAX_ERRORS ? `(and ${offendingComponentSets.size - MAX_ERRORS} more)` : '';
  const errorMessage = `Shape layers must be named "Vector". Component sets with errors: ${componentSetList.map(([name]) => name).join(', ')}${moreCount ? ' ' + moreCount : ''}`;
  
  return {
    checkId: PRE_CHECK_METADATA.layerNames.checkId,
    label: 'Invalid layer names detected',
    passed: false,
    message: errorMessage,
    offendingComponents
  };
}

/**
 * Pre-check: Verifies all nodes only have fills (no visible strokes)
 */
function runFillsOnlyCheck(components: ComponentNode[]): PreCheckResult {
  const offendingComponentSets = new Map<string, string>(); // name -> node ID
  const MAX_ERRORS = 10;
  
  function hasVisibleStrokes(node: any): boolean {
    if (!('strokes' in node)) return false;
    
    const strokes = node.strokes;
    if (!strokes || strokes.length === 0) return false;
    
    // Check if any stroke is visible
    for (const stroke of strokes) {
      // Check if stroke is visible (not explicitly hidden)
      if (stroke.visible !== false) {
        return true;
      }
    }
    
    return false;
  }
  
  function traverseNode(node: SceneNode, baseName: string, nodeId: string) {
    // Check if this node has visible strokes
    if (hasVisibleStrokes(node)) {
      offendingComponentSets.set(baseName, nodeId);
    }
    
    // Recursively traverse children if they exist
    if ('children' in node) {
      for (const child of node.children) {
        traverseNode(child, baseName, nodeId);
      }
    }
  }
  
  // Check all components
  for (const component of components) {
    const baseName = getComponentBaseName(component);
    // Get the component set node if it exists, otherwise use the component itself
    const targetNode = (component.parent && component.parent.type === 'COMPONENT_SET') 
      ? component.parent 
      : component;
    const nodeId = (targetNode as any).id;
    
    if ('children' in component) {
      for (const child of component.children) {
        traverseNode(child, baseName, nodeId);
      }
    }
  }
  
  if (offendingComponentSets.size === 0) {
    return {
      checkId: PRE_CHECK_METADATA.fillsOnly.checkId,
      label: 'All layers use fills only (no strokes)',
      passed: true
    };
  }
  
  const componentSetList = Array.from(offendingComponentSets.entries()).slice(0, MAX_ERRORS);
  const offendingComponents = componentSetList.map(([name, id]) => ({ name, id }));
  const moreCount = offendingComponentSets.size > MAX_ERRORS ? `(and ${offendingComponentSets.size - MAX_ERRORS} more)` : '';
  const errorMessage = `Layers must use fills only (no strokes). Component sets with errors: ${componentSetList.map(([name]) => name).join(', ')}${moreCount ? ' ' + moreCount : ''}`;
  
  return {
    checkId: PRE_CHECK_METADATA.fillsOnly.checkId,
    label: 'Strokes detected',
    passed: false,
    message: errorMessage,
    offendingComponents
  };
}

/**
 * Pre-check: Verify all direct children of component variants have constraints set to "Scale"
 */
function runConstraintsCheck(components: ComponentNode[]): PreCheckResult {
  const offendingComponentSets = new Map<string, string>(); // name -> node ID
  const MAX_ERRORS = 10;
  
  function hasInvalidConstraints(node: SceneNode): boolean {
    if (!('constraints' in node)) return false;
    
    const constraints = (node as any).constraints;
    if (!constraints) return false;
    
    // Check if both horizontal and vertical constraints are set to "SCALE"
    return constraints.horizontal !== 'SCALE' || constraints.vertical !== 'SCALE';
  }
  
  // Check all components
  for (const component of components) {
    const baseName = getComponentBaseName(component);
    // Get the component set node if it exists, otherwise use the component itself
    const targetNode = (component.parent && component.parent.type === 'COMPONENT_SET') 
      ? component.parent 
      : component;
    const nodeId = (targetNode as any).id;
    
    // Check direct children only (not recursive)
    if ('children' in component) {
      for (const child of component.children) {
        if (hasInvalidConstraints(child)) {
          offendingComponentSets.set(baseName, nodeId);
          break; // No need to check more children for this component
        }
      }
    }
  }
  
  if (offendingComponentSets.size === 0) {
    return {
      checkId: PRE_CHECK_METADATA.constraints.checkId,
      label: 'All layer constraints set to "Scale"',
      passed: true
    };
  }
  
  const componentSetList = Array.from(offendingComponentSets.entries()).slice(0, MAX_ERRORS);
  const offendingComponents = componentSetList.map(([name, id]) => ({ name, id }));
  const moreCount = offendingComponentSets.size > MAX_ERRORS ? `(and ${offendingComponentSets.size - MAX_ERRORS} more)` : '';
  const errorMessage = `All direct children must have horizontal and vertical constraints set to "Scale". Component sets with errors: ${componentSetList.map(([name]) => name).join(', ')}${moreCount ? ' ' + moreCount : ''}`;
  
  return {
    checkId: PRE_CHECK_METADATA.constraints.checkId,
    label: 'Invalid constraints detected',
    passed: false,
    message: errorMessage,
    offendingComponents
  };
}

/**
 * Fix constraints: Set all direct children to SCALE for both horizontal and vertical
 */
function fixConstraints(components: ComponentNode[]): { fixedComponents: Array<{ name: string, count: number }>, totalFixed: number } {
  const fixedComponentMap = new Map<string, number>(); // name -> count of children fixed
  let totalFixed = 0;
  
  for (const component of components) {
    const baseName = getComponentBaseName(component);
    let fixedCount = 0;
    
    if ('children' in component) {
      for (const child of component.children) {
        if ('constraints' in child) {
          const constraints = (child as any).constraints;
          
          if (constraints && (constraints.horizontal !== 'SCALE' || constraints.vertical !== 'SCALE')) {
            // Fix the constraints
            (child as any).constraints = {
              horizontal: 'SCALE',
              vertical: 'SCALE'
            };
            fixedCount++;
            totalFixed++;
          }
        }
      }
    }
    
    if (fixedCount > 0) {
      fixedComponentMap.set(baseName, fixedCount);
    }
  }
  
  const fixedComponents = Array.from(fixedComponentMap.entries()).map(([name, count]) => ({ name, count }));
  
  return {
    fixedComponents,
    totalFixed
  };
}

/**
 * Fix layer names: Rename all shape layers inside components to "Vector"
 */
function fixLayerNames(components: ComponentNode[]): { fixedComponents: Array<{ name: string, count: number }>, totalFixed: number } {
  const fixedComponentMap = new Map<string, number>(); // name -> count of layers renamed
  let totalFixed = 0;

  function traverseNode(node: SceneNode, baseName: string): void {
    if (SHAPE_NODE_TYPES.has(node.type) && node.name !== 'Vector') {
      node.name = 'Vector';
      fixedComponentMap.set(baseName, (fixedComponentMap.get(baseName) ?? 0) + 1);
      totalFixed++;
    }
    if ('children' in node) {
      for (const child of node.children) {
        traverseNode(child, baseName);
      }
    }
  }

  for (const component of components) {
    const baseName = getComponentBaseName(component);
    if ('children' in component) {
      for (const child of component.children) {
        traverseNode(child, baseName);
      }
    }
  }

  const fixedComponents = Array.from(fixedComponentMap.entries()).map(([name, count]) => ({ name, count }));

  return {
    fixedComponents,
    totalFixed
  };
}

/**
 * Processes a group of components into icon data
 */
async function processIconGroup(componentSet: ComponentSetNode, components: ComponentNode[]): Promise<IconData> {
  const baseName = componentSet.name;

  // Get tags from the first component (they should be the same for all variants)
  const firstComponent = components[0];
  
  const { categories, tagsString: descriptionTags } = parseDescription(getIconDescription(firstComponent));

  // Process tags using the new function
  let tagsString = descriptionTags;
  
  // If no description found, try to extract meaningful tags from the component name
  if (!tagsString && baseName) {
    // Convert component name to tags by splitting on common separators
    const nameTags = baseName
      .split(/[-_\s]+/)
      .map(tag => tag.toLowerCase())
      .filter(tag => tag.length > 0)
      .join(', ');
    
    if (nameTags) {
      tagsString = nameTags;
    }
  }
  
  const tags = processTags(tagsString);
  
  const variantResults = await mapWithConcurrency(
    components,
    EXPORT_CONCURRENCY,
    async (component, index) => {
      try {
        const variant = deriveVariant(component, baseName);
        
        if (!ALLOWED_WEIGHTS.includes(variant.weight)) {
          console.warn(`Weight "${variant.weight}" is not in allowed weights: ${ALLOWED_WEIGHTS.join(', ')}`);
        }
        
        const svgString = await component.exportAsync({ 
          format: 'SVG_STRING',
          svgOutlineText: true,
          svgIdAttribute: false,
          svgSimplifyStroke: true
        });
        
        if (!svgString || svgString.length === 0) {
          throw new Error(`No SVG data received for component ${component.name}`);
        }
        
        const trimmedSvg = svgString.trim();
        if (!trimmedSvg.startsWith('<svg')) {
          throw new Error(`Invalid SVG data received for component ${component.name}`);
        }
        
        if (!trimmedSvg.endsWith('</svg>')) {
          console.warn(`SVG for component ${component.name} may be incomplete - missing closing tag`);
        }
        
        const deduplicatedSvg = deduplicateSVG(trimmedSvg);
        const normalizedSvg = normalizeSVG(deduplicatedSvg);
        const validation = validateSVG(normalizedSvg, variant);
        if (!validation.isValid) {
          console.warn(`SVG validation failed for variant (weight: "${variant.weight}", duotone: ${variant.duotone}):`, validation.errors);
        }
        
        const hash = generateHash(normalizedSvg);
        if (!hash) {
          console.error(`Failed to generate hash for variant (weight: "${variant.weight}", duotone: ${variant.duotone})`);
        }
        
        if ((index + 1) % YIELD_FREQUENCY === 0) {
          await yieldToFigma();
        }
        
        return {
          variant: variant,
          svg: normalizedSvg,
          hash
        } as IconVariant;
      } catch (error) {
        console.error(`Failed to export variant ${component.name}:`, error);
        return null;
      }
    }
  );

  const variants: IconVariant[] = variantResults.filter(
    (result): result is IconVariant => Boolean(result)
  );
  
  // Sort variants: first by weight (Regular, Bold, Fill), then by duotone (false before true)
  const weightOrder: { [key: string]: number } = { "Regular": 0, "Bold": 1, "Fill": 2 };
  variants.sort((a, b) => {
    const weightDiff = (weightOrder[a.variant.weight] ?? 999) - (weightOrder[b.variant.weight] ?? 999);
    if (weightDiff !== 0) return weightDiff;
    // If weights are the same, sort by duotone (false before true)
    return (a.variant.duotone ? 1 : 0) - (b.variant.duotone ? 1 : 0);
  });
  
  return {
    id: componentSet.key,
    name: toKebabCase(baseName), // Convert to kebab-case
    tags,
    categories,
    variants
  };
}

/**
 * Saves the icons export data to a JSON file
 */
async function saveIconsExport(iconsData: IconData[]): Promise<void> {
  // Sort icons alphabetically by name
  const sortedIcons = iconsData.sort((a, b) => a.name.localeCompare(b.name));
  
  const exportContent: IconsExport = {
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    totalIcons: sortedIcons.length,
    icons: sortedIcons
  };

  figma.ui.postMessage({
    type: 'save-icons-export',
    data: {
      content: JSON.stringify(exportContent, null, 2),
      filename: 'icons-export.json'
    }
  });
}

// ============================================================================
// MAIN PLUGIN LOGIC
// ============================================================================

// Main plugin function
figma.showUI(__html__, { width: 280, height: 172, themeColors: true });

// Listen for messages from the UI
figma.ui.onmessage = async (msg: any) => {
  if (msg.type === 'export-icons') {
    try {
      await exportIcons();
      figma.ui.postMessage({ type: 'success', message: 'Icons exported successfully!' });
    } catch (error: any) {
      figma.ui.postMessage({ type: 'error', message: `Error: ${error.message}` });
    }
  } else if (msg.type === 'navigate-to-node') {
    // Navigate to the node with the given ID
    try {
      const node = figma.getNodeById(msg.nodeId);
      if (node) {
        figma.currentPage.selection = [node as SceneNode];
        figma.viewport.scrollAndZoomIntoView([node as SceneNode]);
      }
    } catch (error) {
      console.error('Failed to navigate to node:', error);
    }
  } else if (msg.type === 'fix-constraints') {
    // Fix all constraints to SCALE
    try {
      const currentPage = figma.currentPage;
      if (!currentPage) {
        throw new Error('No current page found.');
      }
      
      // Re-scan the page to get current components
      const { allComponents } = collectPageComponents(currentPage);

      // Fix the constraints
      const result = fixConstraints(allComponents);
      
      // Send result back to UI
      figma.ui.postMessage({
        type: 'constraints-fixed',
        fixedComponents: result.fixedComponents,
        totalFixed: result.totalFixed
      });
    } catch (error: any) {
      figma.ui.postMessage({ type: 'error', message: `Error fixing constraints: ${error.message}` });
    }
  } else if (msg.type === 'fix-layer-names') {
    try {
      const currentPage = figma.currentPage;
      if (!currentPage) {
        throw new Error('No current page found.');
      }

      const { allComponents } = collectPageComponents(currentPage);

      const result = fixLayerNames(allComponents);

      figma.ui.postMessage({
        type: 'layer-names-fixed',
        fixedComponents: result.fixedComponents,
        totalFixed: result.totalFixed
      });
    } catch (error: any) {
      figma.ui.postMessage({ type: 'error', message: `Error fixing layer names: ${error.message}` });
    }
  } else if (msg.type === 'run-pre-checks') {
    // Run pre-checks only, without exporting
    try {
      const result = await runPreChecks();
      if (result) {
        // All checks passed
        figma.ui.postMessage({ type: 'pre-checks-passed' });
      }
      // If result is null, checks failed (already reported to UI)
    } catch (error: any) {
      figma.ui.postMessage({ type: 'error', message: `Error: ${error.message}` });
    }
  }
};

/**
 * Run pre-checks on the current page
 * Returns the component sets to export if all checks pass, or null if any check fails
 */
async function runPreChecks(): Promise<{ componentSets: ComponentSetNode[] } | null> {
  const currentPage = figma.currentPage;
  if (!currentPage) {
    throw new Error('No current page found. Please select a page with your icon components.');
  }

  // Send initial status
  figma.ui.postMessage({
    type: 'status',
    message: 'Scanning page for icon components...'
  });

  // Loose components are collected too, so the layer checks and fixes cover them
  // while the designer turns them into component sets
  const { componentSets, looseComponents, allComponents } = collectPageComponents(currentPage);

  if (allComponents.length === 0 && componentSets.length === 0) {
    throw new Error(`No components or component sets found on the current page "${currentPage.name}". Please add some icon components to this page.`);
  }

  // Resize window to accommodate checklist
  figma.ui.resize(280, 432);

  // Run all pre-checks sequentially
  const checks = [
    {
      metadata: PRE_CHECK_METADATA.componentSets,
      run: () => runComponentSetsCheck(componentSets, looseComponents)
    },
    {
      metadata: PRE_CHECK_METADATA.duplicateNames,
      run: () => runDuplicateNamesCheck(componentSets)
    },
    {
      metadata: PRE_CHECK_METADATA.categories,
      run: () => runCategoriesCheck(componentSets)
    },
    {
      metadata: PRE_CHECK_METADATA.layerNames,
      run: () => runLayerNamesCheck(allComponents)
    },
    {
      metadata: PRE_CHECK_METADATA.fillsOnly,
      run: () => runFillsOnlyCheck(allComponents)
    },
    {
      metadata: PRE_CHECK_METADATA.constraints,
      run: () => runConstraintsCheck(allComponents)
    }
  ];

  let allPassed = true;
  
  for (const check of checks) {
    // Send start message
    figma.ui.postMessage({ 
      type: 'pre-check-start',
      checkId: check.metadata.checkId,
      label: check.metadata.label
    });
    
    // Run the check
    const result = check.run();
    
    // Send result message
    figma.ui.postMessage({ 
      type: 'pre-check-result',
      checkId: result.checkId,
      label: result.label,
      passed: result.passed,
      message: result.message,
      offendingComponents: result.offendingComponents
    });
    
    if (!result.passed) {
      allPassed = false;
    }
  }

  // Send pre-checks complete message
  figma.ui.postMessage({ 
    type: 'pre-checks-complete',
    passed: allPassed
  });

  // If any check failed, return null
  if (!allPassed) {
    return null;
  }
  
  // Return the collected data for export
  return { componentSets };
}

async function exportIcons(): Promise<void> {
  // Run pre-checks first
  const preCheckResult = await runPreChecks();
  
  // If pre-checks failed, abort export
  if (!preCheckResult) {
    return;
  }
  
  const { componentSets } = preCheckResult;

  figma.ui.postMessage({
    type: 'status',
    message: `Processing ${componentSets.length} component sets...`
  });

  const iconsData: IconData[] = [];
  let processedCount = 0;

  for (let index = 0; index < componentSets.length; index++) {
    const componentSet = componentSets[index];
    try {
      // Update status for current item being processed
      figma.ui.postMessage({
        type: 'progress',
        message: `Processing component set: ${componentSet.name} (${processedCount + 1}/${componentSets.length})`
      });

      const variantComponents = getVariantComponents(componentSet);

      if (variantComponents.length > 0) {
        const iconData = await processIconGroup(componentSet, variantComponents);
        iconsData.push(iconData);
        processedCount++;

        // Update progress with percentage; the last 10% is the JSON generation
        const percentage = Math.round((processedCount / componentSets.length) * 90);
        figma.ui.postMessage({
          type: 'progress',
          message: `Processed ${processedCount}/${componentSets.length} component sets (${percentage}%)`
        });
      }
    } catch (error) {
      console.error(`Failed to process component set ${componentSet.name}:`, error);
    }

    // Yield every few component sets to keep the Figma tab responsive
    if ((index + 1) % 3 === 0) {
      await yieldToFigma();
    }
  }

  // Generate and save the complete icons export
  
  figma.ui.postMessage({ 
    type: 'status', 
    message: 'Generating JSON export file...' 
  });
  
  figma.ui.postMessage({ 
    type: 'progress', 
    message: 'Generating JSON export (90%)' 
  });
  
  await saveIconsExport(iconsData);

  // Send final progress update
  figma.ui.postMessage({ 
    type: 'progress', 
    message: 'Export complete (100%)' 
  });

  // Send final success message
  figma.ui.postMessage({ 
    type: 'success', 
    message: `Successfully exported ${iconsData.length} icons` 
  });

}



