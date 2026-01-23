import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronCircleRightRegular } from './ChevronCircleRightRegular.js';
import { ChevronCircleRightRegularDuotone } from './ChevronCircleRightRegularDuotone.js';
import { ChevronCircleRightBold } from './ChevronCircleRightBold.js';
import { ChevronCircleRightBoldDuotone } from './ChevronCircleRightBoldDuotone.js';
import { ChevronCircleRightFill } from './ChevronCircleRightFill.js';
import { ChevronCircleRightFillDuotone } from './ChevronCircleRightFillDuotone.js';

export interface ChevronCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleRightRegular } from 'stera-icons/icons/ChevronCircleRightRegular';
 */
const ChevronCircleRight = memo(forwardRef<SVGSVGElement, ChevronCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronCircleRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronCircleRightRegular ref={ref} {...rest} />;
}));

ChevronCircleRight.displayName = 'ChevronCircleRight';

// Triple export pattern (lucide-react style)
export { ChevronCircleRight, ChevronCircleRight as ChevronCircleRightIcon, ChevronCircleRight as SiChevronCircleRight };
export default ChevronCircleRight;
