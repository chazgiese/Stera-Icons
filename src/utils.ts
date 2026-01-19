/**
 * Utility functions for Stera Icons
 * Inspired by lucide-react's utility patterns
 */

/**
 * Merges multiple class names into a single string.
 * Filters out falsy values, empty strings, and duplicates.
 * 
 * @param classes - Array of class names (can include undefined/null)
 * @returns Merged class name string
 * 
 * @example
 * mergeClasses('foo', 'bar', undefined, 'baz') // 'foo bar baz'
 * mergeClasses('foo', 'bar', 'foo') // 'foo bar' (duplicates removed)
 */
export const mergeClasses = (...classes: (string | undefined | null | false)[]): string => {
  const seen = new Set<string>();
  return classes
    .filter(className => {
      // Filter out falsy values and empty strings
      if (!className || (typeof className === 'string' && className.trim() === '')) {
        return false;
      }
      // Remove duplicates using Set for O(n) complexity
      if (seen.has(className)) {
        return false;
      }
      seen.add(className);
      return true;
    })
    .join(' ')
    .trim();
};

/**
 * Checks if the props object contains any accessibility-related properties.
 * Used to determine if aria-hidden should be automatically applied.
 * 
 * @param props - Props object to check
 * @returns true if any a11y prop is present, false otherwise
 * 
 * @example
 * hasA11yProp({ 'aria-label': 'Search' }) // true
 * hasA11yProp({ className: 'icon' }) // false
 * hasA11yProp({ role: 'img' }) // true
 */
export const hasA11yProp = (props: Record<string, unknown>): boolean => {
  for (const prop in props) {
    // Check for aria-* attributes, role, or title
    if (prop.startsWith('aria-') || prop === 'role' || prop === 'title') {
      return true;
    }
  }
  return false;
};

/**
 * Converts a string to kebab-case.
 * Used for generating CSS class names from component names.
 * 
 * @param string - String to convert
 * @returns kebab-case string
 * 
 * @example
 * toKebabCase('SearchBold') // 'search-bold'
 * toKebabCase('UserCircle') // 'user-circle'
 */
export const toKebabCase = (string: string): string => {
  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
};

/**
 * Converts a string to camelCase.
 * 
 * @param string - String to convert
 * @returns camelCase string
 * 
 * @example
 * toCamelCase('search-bold') // 'searchBold'
 * toCamelCase('user_circle') // 'userCircle'
 */
export const toCamelCase = (string: string): string => {
  return string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => (p2 ? p2.toUpperCase() : p1.toLowerCase())
  );
};

/**
 * Converts a string to PascalCase.
 * 
 * @param string - String to convert
 * @returns PascalCase string
 * 
 * @example
 * toPascalCase('search-bold') // 'SearchBold'
 * toPascalCase('user_circle') // 'UserCircle'
 */
export const toPascalCase = (string: string): string => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
