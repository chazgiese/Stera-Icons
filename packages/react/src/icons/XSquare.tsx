import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XSquareRegular } from './XSquareRegular';
import { XSquareRegularDuotone } from './XSquareRegularDuotone';
import { XSquareBold } from './XSquareBold';
import { XSquareBoldDuotone } from './XSquareBoldDuotone';
import { XSquareFill } from './XSquareFill';
import { XSquareFillDuotone } from './XSquareFillDuotone';

export interface XSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * XSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { XSquareRegular } from 'stera-icons/XSquareRegular';
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
