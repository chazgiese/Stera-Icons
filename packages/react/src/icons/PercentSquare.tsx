import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentSquareRegular } from './PercentSquareRegular';
import { PercentSquareRegularDuotone } from './PercentSquareRegularDuotone';
import { PercentSquareBold } from './PercentSquareBold';
import { PercentSquareBoldDuotone } from './PercentSquareBoldDuotone';
import { PercentSquareFill } from './PercentSquareFill';
import { PercentSquareFillDuotone } from './PercentSquareFillDuotone';

export interface PercentSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PercentSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PercentSquareRegular } from 'stera-icons/PercentSquareRegular';
 */
const PercentSquare = memo(forwardRef<SVGSVGElement, PercentSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PercentSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PercentSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PercentSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PercentSquareFill ref={ref} {...rest} />;
  if (duotone) return <PercentSquareRegularDuotone ref={ref} {...rest} />;
  return <PercentSquareRegular ref={ref} {...rest} />;
}));

PercentSquare.displayName = 'PercentSquare';

export { PercentSquare };
