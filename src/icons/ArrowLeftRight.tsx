import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowLeftRightRegular } from './ArrowLeftRightRegular.js';
import { ArrowLeftRightRegularDuotone } from './ArrowLeftRightRegularDuotone.js';
import { ArrowLeftRightBold } from './ArrowLeftRightBold.js';
import { ArrowLeftRightBoldDuotone } from './ArrowLeftRightBoldDuotone.js';
import { ArrowLeftRightFill } from './ArrowLeftRightFill.js';
import { ArrowLeftRightFillDuotone } from './ArrowLeftRightFillDuotone.js';

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
