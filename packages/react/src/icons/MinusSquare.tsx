import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinusSquareRegular } from './MinusSquareRegular';
import { MinusSquareRegularDuotone } from './MinusSquareRegularDuotone';
import { MinusSquareBold } from './MinusSquareBold';
import { MinusSquareBoldDuotone } from './MinusSquareBoldDuotone';
import { MinusSquareFill } from './MinusSquareFill';
import { MinusSquareFillDuotone } from './MinusSquareFillDuotone';

export interface MinusSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MinusSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MinusSquareRegular } from 'stera-icons/MinusSquareRegular';
 */
const MinusSquare = memo(forwardRef<SVGSVGElement, MinusSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinusSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MinusSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MinusSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MinusSquareFill ref={ref} {...rest} />;
  if (duotone) return <MinusSquareRegularDuotone ref={ref} {...rest} />;
  return <MinusSquareRegular ref={ref} {...rest} />;
}));

MinusSquare.displayName = 'MinusSquare';

export { MinusSquare };
