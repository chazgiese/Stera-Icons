import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullSquareUpRegular } from './ChevronFullSquareUpRegular.js';
import { ChevronFullSquareUpRegularDuotone } from './ChevronFullSquareUpRegularDuotone.js';
import { ChevronFullSquareUpBold } from './ChevronFullSquareUpBold.js';
import { ChevronFullSquareUpBoldDuotone } from './ChevronFullSquareUpBoldDuotone.js';
import { ChevronFullSquareUpFill } from './ChevronFullSquareUpFill.js';
import { ChevronFullSquareUpFillDuotone } from './ChevronFullSquareUpFillDuotone.js';

export interface ChevronFullSquareUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullSquareUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullSquareUpRegular } from 'stera-icons/icons/ChevronFullSquareUpRegular';
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
export default ChevronFullSquareUp;
