import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowRightRegular } from './ArrowRightRegular.js';
import { ArrowRightRegularDuotone } from './ArrowRightRegularDuotone.js';
import { ArrowRightBold } from './ArrowRightBold.js';
import { ArrowRightBoldDuotone } from './ArrowRightBoldDuotone.js';
import { ArrowRightFill } from './ArrowRightFill.js';
import { ArrowRightFillDuotone } from './ArrowRightFillDuotone.js';

export interface ArrowRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowRightRegular } from 'stera-icons/icons/ArrowRightRegular';
 */
const ArrowRight = memo(forwardRef<SVGSVGElement, ArrowRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowRightRegular ref={ref} {...rest} />;
}));

ArrowRight.displayName = 'ArrowRight';

// Triple export pattern (lucide-react style)
export { ArrowRight, ArrowRight as ArrowRightIcon, ArrowRight as SiArrowRight };
export default ArrowRight;
