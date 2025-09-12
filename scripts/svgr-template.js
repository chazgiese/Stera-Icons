const svgrTemplate = (variables, { tpl }) => {
  const { componentName, props, jsx, interfaces, imports, exports } = variables;
  
  return tpl`
import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';

${interfaces}

const ${componentName} = memo(forwardRef<SVGSVGElement, IconProps>(({ 
  size = 24, 
  color = 'currentColor', 
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props 
}, ref) => (
  ${jsx}
)));

${componentName}.displayName = '${componentName}';

export { ${componentName} };
export default ${componentName};
`;
};

export default svgrTemplate;
