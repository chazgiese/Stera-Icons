import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareRegular } from './SquareRegular';
import { SquareRegularDuotone } from './SquareRegularDuotone';
import { SquareBold } from './SquareBold';
import { SquareBoldDuotone } from './SquareBoldDuotone';
import { SquareFill } from './SquareFill';
import { SquareFillDuotone } from './SquareFillDuotone';

export interface SquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Square with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SquareRegular } from 'stera-icons/SquareRegular';
 */
const Square = memo(forwardRef<SVGSVGElement, SquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SquareFill ref={ref} {...rest} />;
  if (duotone) return <SquareRegularDuotone ref={ref} {...rest} />;
  return <SquareRegular ref={ref} {...rest} />;
}));

Square.displayName = 'Square';

export { Square };
