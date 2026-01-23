/**
 * JSX Generation Utilities
 * 
 * Functions for generating JSX code for icon components.
 */

import { generateTripleExport } from '../helpers.js';

/**
 * Generate JSX for path elements
 * @param {Array<Object>} paths - Array of path objects with attributes
 * @returns {string} - JSX string representing the path elements
 */
export function generatePathJsx(paths) {
  if (paths.length === 0) {
    return '<path d="" />';
  }
  
  return paths.map(attrs => {
    const attrStrings = Object.entries(attrs).map(([key, value]) => {
      // Handle numeric values like opacity
      if (key === 'opacity' && !isNaN(parseFloat(value))) {
        return `${key}={${value}}`;
      }
      return `${key}="${value}"`;
    });
    return `<path ${attrStrings.join(' ')} />`;
  }).join('\n        ');
}

/**
 * Generate component code for a direct variant
 * @param {Object} params - Component generation parameters
 * @param {string} params.componentName - Name of the component (e.g., "SearchRegular")
 * @param {string} params.kebabIconName - Kebab-case icon name for CSS
 * @param {string} params.pathJsx - JSX code for paths
 * @returns {string} - Complete component code
 */
export function generateVariantComponent({ componentName, kebabIconName, pathJsx }) {
  // Import with .js extension for ESM compatibility
  // TypeScript resolves .js to .ts during compilation
  return `import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ${componentName}Props = Omit<IconBaseProps, 'children'>;

const ${componentName} = memo(
  forwardRef<SVGSVGElement, ${componentName}Props>((props, ref) => (
    <IconBase ref={ref} iconName="${kebabIconName}" {...props}>
      ${pathJsx}
    </IconBase>
  ))
);

${componentName}.displayName = '${componentName}';

// Triple export pattern (lucide-react style)
${generateTripleExport(componentName)}
export default ${componentName};
export type { ${componentName}Props };
`;
}

/**
 * Generate wrapper component code for dynamic weight/duotone selection
 * @param {Object} params - Wrapper generation parameters
 * @param {string} params.baseComponentName - Base component name (e.g., "Search")
 * @param {Array<string>} params.imports - Import statements for variants
 * @param {Map<string, string>} params.componentMap - Map of variant keys to component names
 * @param {Array<string>} params.selectionLogic - Array of if statements for variant selection
 * @param {string} params.defaultComponent - Default component name
 * @param {string} params.regularVariantName - Name of the regular variant for docs
 * @returns {string} - Complete wrapper component code
 */
export function generateWrapperComponent({
  baseComponentName,
  imports,
  componentMap,
  selectionLogic,
  defaultComponent,
  regularVariantName
}) {
  return `import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
${imports.join('\n')}

export interface ${baseComponentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ${baseComponentName} - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ${regularVariantName} } from 'stera-icons/icons/${regularVariantName}';
 */
const ${baseComponentName} = memo(forwardRef<SVGSVGElement, ${baseComponentName}Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  ${selectionLogic.join('\n  ')}
}));

${baseComponentName}.displayName = '${baseComponentName}';

// Triple export pattern (lucide-react style)
${generateTripleExport(baseComponentName)}
export default ${baseComponentName};
`;
}

/**
 * Build selection logic for wrapper components
 * @param {Map<string, string>} componentMap - Map of variant keys to component names
 * @returns {Array<string>} - Array of if statement strings
 */
export function buildSelectionLogic(componentMap) {
  const selectionLogic = [];
  
  if (componentMap.has('bold-true')) {
    selectionLogic.push(`if (weight === 'bold' && duotone) return <${componentMap.get('bold-true')} ref={ref} {...rest} />;`);
  }
  if (componentMap.has('bold-false')) {
    selectionLogic.push(`if (weight === 'bold') return <${componentMap.get('bold-false')} ref={ref} {...rest} />;`);
  }
  if (componentMap.has('fill-true')) {
    selectionLogic.push(`if (weight === 'fill' && duotone) return <${componentMap.get('fill-true')} ref={ref} {...rest} />;`);
  }
  if (componentMap.has('fill-false')) {
    selectionLogic.push(`if (weight === 'fill') return <${componentMap.get('fill-false')} ref={ref} {...rest} />;`);
  }
  if (componentMap.has('regular-true')) {
    selectionLogic.push(`if (duotone) return <${componentMap.get('regular-true')} ref={ref} {...rest} />;`);
  }
  
  return selectionLogic;
}
