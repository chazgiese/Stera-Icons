import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpRightRegular } from './ArrowCircleUpRightRegular';
import { ArrowCircleUpRightRegularDuotone } from './ArrowCircleUpRightRegularDuotone';
import { ArrowCircleUpRightBold } from './ArrowCircleUpRightBold';
import { ArrowCircleUpRightBoldDuotone } from './ArrowCircleUpRightBoldDuotone';
import { ArrowCircleUpRightFill } from './ArrowCircleUpRightFill';
import { ArrowCircleUpRightFillDuotone } from './ArrowCircleUpRightFillDuotone';

export interface ArrowCircleUpRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleUpRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleUpRightRegular } from 'stera-icons/icons/ArrowCircleUpRightRegular';
 */
const ArrowCircleUpRight = memo(forwardRef<SVGSVGElement, ArrowCircleUpRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleUpRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleUpRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleUpRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleUpRightRegular ref={ref} {...rest} />;
}));

ArrowCircleUpRight.displayName = 'ArrowCircleUpRight';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRight, ArrowCircleUpRight as ArrowCircleUpRightIcon, ArrowCircleUpRight as SiArrowCircleUpRight };
export default ArrowCircleUpRight;
