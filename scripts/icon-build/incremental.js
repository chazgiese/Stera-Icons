/**
 * Incremental Build Support
 * 
 * Functions for optimizing builds by only rebuilding changed icons.
 */

/**
 * Determine which icons need to be rebuilt based on hash changes
 * @param {Array} icons - Array of icon objects from export
 * @param {Map} existingMetadataMap - Map of existing metadata keyed by icon identifier
 * @returns {Object} - Object with iconsToRebuild and iconsToSkip arrays
 */
export function determineIconsToRebuild(icons, existingMetadataMap) {
  const iconsToRebuild = [];
  const iconsToSkip = [];
  
  for (const icon of icons) {
    let needsRebuild = false;
    
    // Check each variant
    for (const variantData of icon.variants) {
      const weight = variantData.variant.weight.toLowerCase();
      const duotone = variantData.variant.duotone;
      const metadataKey = `${icon.name}|${weight}|${duotone}`;
      
      const existingItem = existingMetadataMap.get(metadataKey);
      
      // Rebuild if:
      // 1. Icon doesn't exist in metadata (new icon)
      // 2. Hash has changed (modified icon)
      if (!existingItem || existingItem.svgHash !== variantData.hash) {
        needsRebuild = true;
        break;
      }
    }
    
    if (needsRebuild) {
      iconsToRebuild.push(icon);
    } else {
      iconsToSkip.push(icon);
    }
  }
  
  return { iconsToRebuild, iconsToSkip };
}

/**
 * Calculate build statistics for incremental builds
 * @param {number} totalIcons - Total number of icons in export
 * @param {number} iconsToRebuild - Number of icons that need rebuilding
 * @param {number} iconsToSkip - Number of icons to skip
 * @returns {Object} - Build statistics
 */
export function calculateBuildStats(totalIcons, iconsToRebuild, iconsToSkip) {
  const rebuildPercentage = ((iconsToRebuild / totalIcons) * 100).toFixed(1);
  const skipPercentage = ((iconsToSkip / totalIcons) * 100).toFixed(1);
  
  return {
    total: totalIcons,
    rebuild: iconsToRebuild,
    skip: iconsToSkip,
    rebuildPercentage,
    skipPercentage,
    isIncremental: iconsToSkip > 0
  };
}

/**
 * Create a lightweight metadata map for quick lookups
 * @param {Array} existingMetadata - Array of metadata objects
 * @returns {Map} - Map keyed by icon identifier
 */
export function createMetadataMap(existingMetadata) {
  const map = new Map();
  
  for (const item of existingMetadata) {
    const key = `${item.name}|${item.weight}|${item.duotone}`;
    map.set(key, item);
  }
  
  return map;
}
