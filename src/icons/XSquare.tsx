import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { XSquareRegular } from './XSquareRegular.js';
import { XSquareRegularDuotone } from './XSquareRegularDuotone.js';
import { XSquareBold } from './XSquareBold.js';
import { XSquareBoldDuotone } from './XSquareBoldDuotone.js';
import { XSquareFill } from './XSquareFill.js';
import { XSquareFillDuotone } from './XSquareFillDuotone.js';

export interface XSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * XSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { XSquareRegular } from 'stera-icons/icons/XSquareRegular';
 */
const XSquare = memo(forwardRef<SVGSVGElement, XSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <XSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <XSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <XSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <XSquareFill ref={ref} {...rest} />;
  if (duotone) return <XSquareRegularDuotone ref={ref} {...rest} />;
  return <XSquareRegular ref={ref} {...rest} />;
}));

XSquare.displayName = 'XSquare';

// Triple export pattern (lucide-react style)
export { XSquare, XSquare as XSquareIcon, XSquare as SiXSquare };
export default XSquare;
