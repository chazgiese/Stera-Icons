import { forwardRef, useState, useEffect, ComponentType, ReactNode } from 'react';
import type { IconProps } from './types';

/**
 * Props for the DynamicIcon component.
 * 
 * @property name - The name of the icon to load (e.g., 'search', 'home', 'user')
 * @property fallback - Optional fallback component to show while loading
 * @property weight - Icon weight variant (default: 'regular')
 * @property duotone - Enable duotone variant (default: false)
 * @property onError - Optional callback function called when icon fails to load
 */
export interface DynamicIconProps extends Omit<IconProps, 'weight' | 'duotone'> {
  name: string;
  fallback?: ComponentType | ReactNode;
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
  onError?: (error: Error) => void;
}

/**
 * Type for the dynamic icon imports map.
 * Maps kebab-case icon names to dynamic import functions.
 */
export type DynamicIconImports = Record<string, () => Promise<{ default: ComponentType<IconProps> }>>;

/**
 * Gets an icon component by name using dynamic imports.
 * 
 * @param name - Icon name in kebab-case
 * @param weight - Icon weight variant
 * @param duotone - Whether to use duotone variant
 * @param dynamicIconImports - Map of icon names to import functions
 * @returns Promise resolving to the icon component
 * @throws Error if icon name is not found
 */
export async function getIconComponent(
  name: string,
  weight: 'regular' | 'bold' | 'fill' = 'regular',
  duotone: boolean = false,
  dynamicIconImports: DynamicIconImports
): Promise<ComponentType<IconProps>> {
  // Build the variant suffix: regular weight uses no suffix, others use -weight
  const weightSuffix = weight === 'regular' ? '' : `-${weight}`;
  const duotoneSuffix = duotone ? '-duotone' : '';
  const iconKey = `${name}${weightSuffix}${duotoneSuffix}`;
  
  // Try exact match first
  if (iconKey in dynamicIconImports) {
    const module = await dynamicIconImports[iconKey]();
    return module.default;
  }
  
  // Fallback: try base name (wrapper component)
  if (name in dynamicIconImports) {
    const module = await dynamicIconImports[name]();
    return module.default;
  }
  
  throw new Error(
    `[stera-icons]: Icon "${name}" with weight "${weight}"${duotone ? ' (duotone)' : ''} not found. ` +
    `Available icons can be found at https://github.com/chazgiese/Stera-Icons`
  );
}

/**
 * DynamicIcon - Lazy-loads icon components at runtime.
 * 
 * Useful for applications that need to render icons based on dynamic data
 * (e.g., from a CMS, API, or user input) without importing all icons upfront.
 * 
 * **Performance Note**: This component uses dynamic imports which add a small
 * runtime overhead. For optimal performance, prefer direct imports when you
 * know the icon at build time:
 * 
 * @example
 * // ✅ Best: Direct import (no runtime overhead)
 * import { SearchBold } from 'stera-icons';
 * <SearchBold size={24} />
 * 
 * @example
 * // ✅ Good: Dynamic when needed
 * import { DynamicIcon } from 'stera-icons/dynamic';
 * <DynamicIcon name="search" weight="bold" />
 * 
 * @example
 * // With fallback
 * <DynamicIcon 
 *   name={iconName} 
 *   fallback={<Loader />}
 *   size={24}
 *   color="blue"
 * />
 */
export const createDynamicIcon = (dynamicIconImports: DynamicIconImports) => {
  const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(
    ({ name, fallback: Fallback, weight = 'regular', duotone = false, onError, ...props }, ref) => {
      const [IconComponent, setIconComponent] = useState<ComponentType<IconProps> | null>(null);
      const [error, setError] = useState<Error | null>(null);

      useEffect(() => {
        let cancelled = false;
        // Reset state when icon name, weight, or duotone changes
        setIconComponent(null);
        setError(null);

        getIconComponent(name, weight, duotone, dynamicIconImports)
          .then(component => {
            if (!cancelled) setIconComponent(component);
          })
          .catch((err: Error) => {
            if (!cancelled) {
              console.error(err.message);
              setError(err);
              onError?.(err);
            }
          });

        return () => { cancelled = true; };
      }, [name, weight, duotone]);

      // Show fallback while loading
      if (IconComponent == null) {
        if (error) {
          // If there's an error and a fallback, show fallback
          if (Fallback != null) {
            return typeof Fallback === 'function' ? <Fallback /> : (Fallback as ReactNode);
          }
          // No fallback, return null
          return null;
        }
        
        // Loading state
        if (Fallback != null) {
          return typeof Fallback === 'function' ? <Fallback /> : (Fallback as ReactNode);
        }
        return null;
      }

      // Render the loaded icon with props
      // Note: weight and duotone are already handled in the icon selection logic
      return <IconComponent ref={ref} {...props} />;
    }
  );

  DynamicIcon.displayName = 'DynamicIcon';
  
  return DynamicIcon;
};

/**
 * Helper to get list of all available icon names from the imports map.
 * 
 * @param dynamicIconImports - The icon imports map
 * @returns Array of icon names
 */
export const getIconNames = (dynamicIconImports: DynamicIconImports): string[] => {
  return Object.keys(dynamicIconImports);
};
