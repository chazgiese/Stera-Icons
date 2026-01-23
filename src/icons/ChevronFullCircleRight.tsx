import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullCircleRightRegular } from './ChevronFullCircleRightRegular.js';
import { ChevronFullCircleRightRegularDuotone } from './ChevronFullCircleRightRegularDuotone.js';
import { ChevronFullCircleRightBold } from './ChevronFullCircleRightBold.js';
import { ChevronFullCircleRightBoldDuotone } from './ChevronFullCircleRightBoldDuotone.js';
import { ChevronFullCircleRightFill } from './ChevronFullCircleRightFill.js';
import { ChevronFullCircleRightFillDuotone } from './ChevronFullCircleRightFillDuotone.js';

export interface ChevronFullCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleRightRegular } from 'stera-icons/icons/ChevronFullCircleRightRegular';
 */
const ChevronFullCircleRight = memo(forwardRef<SVGSVGElement, ChevronFullCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleRightRegular ref={ref} {...rest} />;
}));

ChevronFullCircleRight.displayName = 'ChevronFullCircleRight';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRight, ChevronFullCircleRight as ChevronFullCircleRightIcon, ChevronFullCircleRight as SiChevronFullCircleRight };
export default ChevronFullCircleRight;
