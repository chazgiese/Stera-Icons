/**
 * Dynamic icon loading entry point.
 * 
 * Import this module when you need to load icons dynamically at runtime
 * based on user input, API data, or other dynamic sources.
 * 
 * @example
 * import { DynamicIcon, iconNames } from 'stera-icons/dynamic';
 * 
 * function IconPicker({ iconName }) {
 *   return <DynamicIcon name={iconName} size={24} />;
 * }
 * 
 * // List all available icons
 * console.log(iconNames); // ['search', 'home', 'user', ...]
 */

import { createDynamicIcon, getIconNames } from './DynamicIcon';
import { dynamicIconImports } from './dynamicIconImports';

/**
 * DynamicIcon component for runtime icon loading.
 * 
 * @see {@link DynamicIcon} for detailed documentation and examples.
 */
export const DynamicIcon = createDynamicIcon(dynamicIconImports);

/**
 * Map of all available icon names to their dynamic import functions.
 * Use this for advanced use cases where you need direct control over imports.
 */
export { dynamicIconImports };

/**
 * Array of all available icon names.
 * Useful for building icon pickers, search functionality, or validation.
 */
export const iconNames = getIconNames(dynamicIconImports);

// Re-export types for convenience
export type { DynamicIconProps, DynamicIconImports } from './DynamicIcon';
