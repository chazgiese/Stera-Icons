import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckSquareRegular } from './CheckSquareRegular';
import { CheckSquareRegularDuotone } from './CheckSquareRegularDuotone';
import { CheckSquareBold } from './CheckSquareBold';
import { CheckSquareBoldDuotone } from './CheckSquareBoldDuotone';
import { CheckSquareFill } from './CheckSquareFill';
import { CheckSquareFillDuotone } from './CheckSquareFillDuotone';

export interface CheckSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CheckSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CheckSquareRegular } from 'stera-icons/CheckSquareRegular';
 */
const CheckSquare = memo(forwardRef<SVGSVGElement, CheckSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CheckSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CheckSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CheckSquareFill ref={ref} {...rest} />;
  if (duotone) return <CheckSquareRegularDuotone ref={ref} {...rest} />;
  return <CheckSquareRegular ref={ref} {...rest} />;
}));

CheckSquare.displayName = 'CheckSquare';

export { CheckSquare };
