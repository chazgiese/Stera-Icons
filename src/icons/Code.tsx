import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CodeRegular } from './CodeRegular.js';
import { CodeRegularDuotone } from './CodeRegularDuotone.js';
import { CodeBold } from './CodeBold.js';
import { CodeBoldDuotone } from './CodeBoldDuotone.js';
import { CodeFill } from './CodeFill.js';
import { CodeFillDuotone } from './CodeFillDuotone.js';

export interface CodeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Code - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CodeRegular } from 'stera-icons/icons/CodeRegular';
 */
const Code = memo(forwardRef<SVGSVGElement, CodeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CodeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CodeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CodeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CodeFill ref={ref} {...rest} />;
  if (duotone) return <CodeRegularDuotone ref={ref} {...rest} />;
  return <CodeRegular ref={ref} {...rest} />;
}));

Code.displayName = 'Code';

// Triple export pattern (lucide-react style)
export { Code, Code as CodeIcon, Code as SiCode };
export default Code;
