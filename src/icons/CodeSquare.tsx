import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CodeSquareRegular } from './CodeSquareRegular.js';
import { CodeSquareRegularDuotone } from './CodeSquareRegularDuotone.js';
import { CodeSquareBold } from './CodeSquareBold.js';
import { CodeSquareBoldDuotone } from './CodeSquareBoldDuotone.js';
import { CodeSquareFill } from './CodeSquareFill.js';
import { CodeSquareFillDuotone } from './CodeSquareFillDuotone.js';

export interface CodeSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CodeSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CodeSquareRegular } from 'stera-icons/icons/CodeSquareRegular';
 */
const CodeSquare = memo(forwardRef<SVGSVGElement, CodeSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CodeSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CodeSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CodeSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CodeSquareFill ref={ref} {...rest} />;
  if (duotone) return <CodeSquareRegularDuotone ref={ref} {...rest} />;
  return <CodeSquareRegular ref={ref} {...rest} />;
}));

CodeSquare.displayName = 'CodeSquare';

// Triple export pattern (lucide-react style)
export { CodeSquare, CodeSquare as CodeSquareIcon, CodeSquare as SiCodeSquare };
export default CodeSquare;
