import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerUpRightRegular } from './ArrowCornerUpRightRegular';
import { ArrowCornerUpRightRegularDuotone } from './ArrowCornerUpRightRegularDuotone';
import { ArrowCornerUpRightBold } from './ArrowCornerUpRightBold';
import { ArrowCornerUpRightBoldDuotone } from './ArrowCornerUpRightBoldDuotone';
import { ArrowCornerUpRightFill } from './ArrowCornerUpRightFill';
import { ArrowCornerUpRightFillDuotone } from './ArrowCornerUpRightFillDuotone';

export interface ArrowCornerUpRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerUpRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerUpRightRegular } from 'stera-icons/icons/ArrowCornerUpRightRegular';
 */
const ArrowCornerUpRight = memo(forwardRef<SVGSVGElement, ArrowCornerUpRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerUpRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCornerUpRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCornerUpRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCornerUpRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCornerUpRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowCornerUpRightRegular ref={ref} {...rest} />;
}));

ArrowCornerUpRight.displayName = 'ArrowCornerUpRight';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRight, ArrowCornerUpRight as ArrowCornerUpRightIcon, ArrowCornerUpRight as SiArrowCornerUpRight };
export default ArrowCornerUpRight;
