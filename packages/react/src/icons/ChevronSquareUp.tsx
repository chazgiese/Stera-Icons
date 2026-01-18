import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareUpRegular } from './ChevronSquareUpRegular';
import { ChevronSquareUpRegularDuotone } from './ChevronSquareUpRegularDuotone';
import { ChevronSquareUpBold } from './ChevronSquareUpBold';
import { ChevronSquareUpBoldDuotone } from './ChevronSquareUpBoldDuotone';
import { ChevronSquareUpFill } from './ChevronSquareUpFill';
import { ChevronSquareUpFillDuotone } from './ChevronSquareUpFillDuotone';

export interface ChevronSquareUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronSquareUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronSquareUpRegular } from 'stera-icons/ChevronSquareUpRegular';
 */
const ChevronSquareUp = memo(forwardRef<SVGSVGElement, ChevronSquareUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronSquareUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronSquareUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronSquareUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronSquareUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronSquareUpRegular ref={ref} {...rest} />;
}));

ChevronSquareUp.displayName = 'ChevronSquareUp';

export { ChevronSquareUp };
