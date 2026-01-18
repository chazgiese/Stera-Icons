import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareUpRegular } from './ChevronFullSquareUpRegular';
import { ChevronFullSquareUpRegularDuotone } from './ChevronFullSquareUpRegularDuotone';
import { ChevronFullSquareUpBold } from './ChevronFullSquareUpBold';
import { ChevronFullSquareUpBoldDuotone } from './ChevronFullSquareUpBoldDuotone';
import { ChevronFullSquareUpFill } from './ChevronFullSquareUpFill';
import { ChevronFullSquareUpFillDuotone } from './ChevronFullSquareUpFillDuotone';

export interface ChevronFullSquareUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullSquareUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullSquareUpRegular } from 'stera-icons/ChevronFullSquareUpRegular';
 */
const ChevronFullSquareUp = memo(forwardRef<SVGSVGElement, ChevronFullSquareUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullSquareUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullSquareUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullSquareUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullSquareUpRegular ref={ref} {...rest} />;
}));

ChevronFullSquareUp.displayName = 'ChevronFullSquareUp';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareUp, ChevronFullSquareUp as ChevronFullSquareUpIcon, ChevronFullSquareUp as SiChevronFullSquareUp };
