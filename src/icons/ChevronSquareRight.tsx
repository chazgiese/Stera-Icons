import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronSquareRightRegular } from './ChevronSquareRightRegular.js';
import { ChevronSquareRightRegularDuotone } from './ChevronSquareRightRegularDuotone.js';
import { ChevronSquareRightBold } from './ChevronSquareRightBold.js';
import { ChevronSquareRightBoldDuotone } from './ChevronSquareRightBoldDuotone.js';
import { ChevronSquareRightFill } from './ChevronSquareRightFill.js';
import { ChevronSquareRightFillDuotone } from './ChevronSquareRightFillDuotone.js';

export interface ChevronSquareRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronSquareRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronSquareRightRegular } from 'stera-icons/icons/ChevronSquareRightRegular';
 */
const ChevronSquareRight = memo(forwardRef<SVGSVGElement, ChevronSquareRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronSquareRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronSquareRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronSquareRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronSquareRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronSquareRightRegular ref={ref} {...rest} />;
}));

ChevronSquareRight.displayName = 'ChevronSquareRight';

// Triple export pattern (lucide-react style)
export { ChevronSquareRight, ChevronSquareRight as ChevronSquareRightIcon, ChevronSquareRight as SiChevronSquareRight };
export default ChevronSquareRight;
