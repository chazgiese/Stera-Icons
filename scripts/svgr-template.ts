import pkg from '@svgr/core';
const { Template } = pkg;

const template: Template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

const svgrTemplate: Template = (variables, { tpl }) => {
  const { componentName, props, jsx, interfaces, imports, exports } = variables;
  
  return tpl`
import React, { forwardRef, memo } from 'react';
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
));

${componentName}.displayName = '${componentName}';

export { ${componentName} };
export default ${componentName};
`;
};

export default svgrTemplate;
