/**
 * Helper functions for processing icon names and generating component names
 */

// Define the valid weight types
const VALID_WEIGHTS = new Set(['regular', 'bold', 'fill']);

// Map from export weight names to internal weight names
const WEIGHT_MAPPING = {
  'Regular': 'regular',
  'Bold': 'bold',
  'Fill': 'fill'
};

export function normalizeSlug(name) {
  // Replace unicode dashes with ASCII hyphen
  const unified = name.replace(/[‒–—―−]/g, '-');
  // Keep only lowercase letters, numbers, and hyphens
  const stripped = unified.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  // Collapse multiple hyphens and trim leading/trailing hyphens
  return stripped.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export function ensureUnique(slug, taken) {
  if (!taken.has(slug)) {
    taken.add(slug);
    return slug;
  }
  
  let i = 2;
  while (taken.has(`${slug}-${i}`)) {
    i++;
  }
  
  const unique = `${slug}-${i}`;
  taken.add(unique);
  return unique;
}

export function toPascalCase(slug) {
  return slug
    .split('-')
    .map(s => s ? s[0].toUpperCase() + s.slice(1) : '')
    .join('');
}

export function getComponentName(slug, weight, duotone) {
  const baseName = toPascalCase(slug);
  
  // All direct variants get a suffix to avoid collision with wrapper components
  // Wrapper: Search (dynamic weight prop)
  // Direct variants: SearchRegular, SearchBold, SearchBoldDuotone, etc.
  const weightSuffix = weight.charAt(0).toUpperCase() + weight.slice(1);
  const duotoneSuffix = duotone ? 'Duotone' : '';
  
  return `${baseName}${weightSuffix}${duotoneSuffix}`;
}

export function getFileName(slug, weight, duotone) {
  // File names match component names in PascalCase
  // e.g., SearchRegular.tsx exports SearchRegular
  const baseName = toPascalCase(slug);
  const weightSuffix = weight.charAt(0).toUpperCase() + weight.slice(1);
  const duotoneSuffix = duotone ? 'Duotone' : '';
  
  return `${baseName}${weightSuffix}${duotoneSuffix}`;
}

/**
 * Validates if a given string is a recognized weight type
 * @param {string} weightName - The weight name to check
 * @returns {boolean} - True if it's a valid weight type
 */
export function isValidWeight(weightName) {
  return VALID_WEIGHTS.has(weightName.toLowerCase());
}

/**
 * Maps export weight names to internal weight names
 * @param {string} exportWeight - The weight name from the export (e.g., "Bold", "Fill", "Regular")
 * @returns {string} - The internal weight name (e.g., "bold", "fill", "regular")
 */
export function mapWeightName(exportWeight) {
  return WEIGHT_MAPPING[exportWeight] || 'regular';
}

/**
 * Parses icon name and ensures it doesn't contain variant-type words
 * This helps distinguish between icon names that happen to contain words like "bold"
 * and actual variant types
 * @param {string} iconName - The raw icon name
 * @returns {string} - The processed icon name
 */
export function parseIconName(iconName) {
  // The icon name should be treated as-is, regardless of whether it contains
  // words that also happen to be variant types
  // For example: "text-bold" is a valid icon name even though "bold" is a variant type
  return iconName;
}

/**
 * Validates that a variant data object has the correct structure
 * @param {Object} variantData - The variant data object
 * @returns {boolean} - True if the variant data is valid
 */
export function validateVariantData(variantData) {
  return variantData && 
         variantData.variant &&
         typeof variantData.variant === 'object' &&
         typeof variantData.variant.weight === 'string' &&
         typeof variantData.variant.duotone === 'boolean' &&
         typeof variantData.svg === 'string' &&
         variantData.svg.trim().length > 0;
}

export function parseTags(tags) {
  // Tags are always in array format
  return tags.map(tag => tag.trim().toLowerCase()).filter(tag => tag.length > 0);
}

/**
 * Generate aliased export names for a component (lucide-react style)
 * @param {string} componentName - The component name (e.g., "SearchBold")
 * @returns {Object} - Object with base, icon suffix, and Si prefix aliases
 */
export function generateAliases(componentName) {
  return {
    base: componentName,
    iconSuffix: `${componentName}Icon`,
    siPrefix: `Si${componentName}`
  };
}

/**
 * Generate triple export statement for a component
 * @param {string} componentName - The component name (e.g., "SearchBold")
 * @returns {string} - Export statement with all three aliases
 */
export function generateTripleExport(componentName) {
  const aliases = generateAliases(componentName);
  return `export { ${aliases.base}, ${aliases.base} as ${aliases.iconSuffix}, ${aliases.base} as ${aliases.siPrefix} };`;
}

/**
 * Generate triple export statement with import path
 * @param {string} componentName - The component name (e.g., "SearchBold")
 * @param {string} importPath - The import path (e.g., "./icons/SearchBold")
 * @returns {string} - Full export statement with path
 */
export function generateTripleExportWithPath(componentName, importPath) {
  const aliases = generateAliases(componentName);
  return `export { ${aliases.base}, ${aliases.iconSuffix}, ${aliases.siPrefix} } from '${importPath}';`;
}
