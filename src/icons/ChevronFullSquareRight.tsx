import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullSquareRightRegular } from './ChevronFullSquareRightRegular.js';
import { ChevronFullSquareRightRegularDuotone } from './ChevronFullSquareRightRegularDuotone.js';
import { ChevronFullSquareRightBold } from './ChevronFullSquareRightBold.js';
import { ChevronFullSquareRightBoldDuotone } from './ChevronFullSquareRightBoldDuotone.js';
import { ChevronFullSquareRightFill } from './ChevronFullSquareRightFill.js';
import { ChevronFullSquareRightFillDuotone } from './ChevronFullSquareRightFillDuotone.js';

export interface ChevronFullSquareRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullSquareRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullSquareRightRegular } from 'stera-icons/icons/ChevronFullSquareRightRegular';
 */
const ChevronFullSquareRight = memo(forwardRef<SVGSVGElement, ChevronFullSquareRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullSquareRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullSquareRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullSquareRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullSquareRightRegular ref={ref} {...rest} />;
}));

ChevronFullSquareRight.displayName = 'ChevronFullSquareRight';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareRight, ChevronFullSquareRight as ChevronFullSquareRightIcon, ChevronFullSquareRight as SiChevronFullSquareRight };
export default ChevronFullSquareRight;
