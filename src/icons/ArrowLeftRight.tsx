import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftRightRegular } from './ArrowLeftRightRegular';
import { ArrowLeftRightRegularDuotone } from './ArrowLeftRightRegularDuotone';
import { ArrowLeftRightBold } from './ArrowLeftRightBold';
import { ArrowLeftRightBoldDuotone } from './ArrowLeftRightBoldDuotone';
import { ArrowLeftRightFill } from './ArrowLeftRightFill';
import { ArrowLeftRightFillDuotone } from './ArrowLeftRightFillDuotone';

export interface ArrowLeftRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLeftRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLeftRightRegular } from 'stera-icons/icons/ArrowLeftRightRegular';
 */
const ArrowLeftRight = memo(forwardRef<SVGSVGElement, ArrowLeftRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLeftRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLeftRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLeftRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLeftRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowLeftRightRegular ref={ref} {...rest} />;
}));

ArrowLeftRight.displayName = 'ArrowLeftRight';

// Triple export pattern (lucide-react style)
export { ArrowLeftRight, ArrowLeftRight as ArrowLeftRightIcon, ArrowLeftRight as SiArrowLeftRight };
export default ArrowLeftRight;
