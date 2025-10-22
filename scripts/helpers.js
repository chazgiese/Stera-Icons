/**
 * Helper functions for processing icon names and generating component names
 */

// Define the valid variant types that should be recognized as variants (not part of icon names)
const VALID_VARIANTS = new Set(['bold', 'filled', 'filltone', 'linetone', 'regular']);

// Map from export variant names to internal variant names
const VARIANT_MAPPING = {
  'Bold': 'bold',
  'Fill': 'filled', 
  'Filltone': 'filltone',
  'Linetone': 'linetone',
  'Regular': 'regular'
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

export function getComponentName(slug, variant) {
  const baseName = toPascalCase(slug);
  const iconName = `${baseName}Icon`;
  if (variant === 'filled') return `${iconName}Filled`;
  if (variant === 'bold') return `${iconName}Bold`;
  if (variant === 'filltone') return `${iconName}Filltone`;
  if (variant === 'linetone') return `${iconName}Linetone`;
  return iconName; // regular variant with Icon suffix
}

export function getFileName(slug, variant) {
  if (variant === 'filled') return `${slug}-filled`;
  if (variant === 'bold') return `${slug}-bold`;
  if (variant === 'filltone') return `${slug}-filltone`;
  if (variant === 'linetone') return `${slug}-linetone`;
  return slug; // regular variant gets no suffix
}

/**
 * Validates if a given string is a recognized variant type
 * @param {string} variantName - The variant name to check
 * @returns {boolean} - True if it's a valid variant type
 */
export function isValidVariant(variantName) {
  return VALID_VARIANTS.has(variantName.toLowerCase());
}

/**
 * Maps export variant names to internal variant names
 * @param {string} exportVariant - The variant name from the export (e.g., "Bold", "Fill")
 * @returns {string} - The internal variant name (e.g., "bold", "filled")
 */
export function mapVariantName(exportVariant) {
  return VARIANT_MAPPING[exportVariant] || 'regular';
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
         typeof variantData.variant === 'string' && 
         typeof variantData.svg === 'string' &&
         variantData.svg.trim().length > 0;
}

export function parseTags(tags) {
  // Handle both array format (new) and string format (legacy)
  if (Array.isArray(tags)) {
    return tags.map(tag => tag.trim().toLowerCase()).filter(tag => tag.length > 0);
  }
  
  // Legacy string format
  return tags
    .split(',')
    .map(tag => tag.trim().toLowerCase())
    .filter(tag => tag.length > 0);
}
