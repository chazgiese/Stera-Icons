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
  const iconName = `${baseName}Icon`;
  
  if (weight === 'regular' && !duotone) {
    return iconName; // base component, no suffix
  }
  
  const weightSuffix = weight === 'regular' ? '' : weight.charAt(0).toUpperCase() + weight.slice(1);
  const duotoneSuffix = duotone ? 'Duotone' : '';
  
  return `${iconName}${weightSuffix}${duotoneSuffix}`;
}

export function getFileName(slug, weight, duotone) {
  if (weight === 'regular' && !duotone) {
    return slug; // base component, no suffix
  }
  
  const parts = [];
  if (weight !== 'regular') {
    parts.push(weight);
  }
  if (duotone) {
    parts.push('duotone');
  }
  
  return parts.length > 0 ? `${slug}-${parts.join('-')}` : slug;
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
