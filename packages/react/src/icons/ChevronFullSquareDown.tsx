import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareDownRegular } from './ChevronFullSquareDownRegular';
import { ChevronFullSquareDownRegularDuotone } from './ChevronFullSquareDownRegularDuotone';
import { ChevronFullSquareDownBold } from './ChevronFullSquareDownBold';
import { ChevronFullSquareDownBoldDuotone } from './ChevronFullSquareDownBoldDuotone';
import { ChevronFullSquareDownFill } from './ChevronFullSquareDownFill';
import { ChevronFullSquareDownFillDuotone } from './ChevronFullSquareDownFillDuotone';

export interface ChevronFullSquareDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullSquareDown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullSquareDownRegular } from 'stera-icons/ChevronFullSquareDownRegular';
 */
const ChevronFullSquareDown = memo(forwardRef<SVGSVGElement, ChevronFullSquareDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullSquareDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullSquareDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullSquareDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullSquareDownRegular ref={ref} {...rest} />;
}));

ChevronFullSquareDown.displayName = 'ChevronFullSquareDown';

export { ChevronFullSquareDown };
