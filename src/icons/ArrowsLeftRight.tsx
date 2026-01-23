import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowsLeftRightRegular } from './ArrowsLeftRightRegular.js';
import { ArrowsLeftRightRegularDuotone } from './ArrowsLeftRightRegularDuotone.js';
import { ArrowsLeftRightBold } from './ArrowsLeftRightBold.js';
import { ArrowsLeftRightBoldDuotone } from './ArrowsLeftRightBoldDuotone.js';
import { ArrowsLeftRightFill } from './ArrowsLeftRightFill.js';
import { ArrowsLeftRightFillDuotone } from './ArrowsLeftRightFillDuotone.js';

export interface ArrowsLeftRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowsLeftRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowsLeftRightRegular } from 'stera-icons/icons/ArrowsLeftRightRegular';
 */
const ArrowsLeftRight = memo(forwardRef<SVGSVGElement, ArrowsLeftRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowsLeftRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowsLeftRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowsLeftRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowsLeftRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowsLeftRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowsLeftRightRegular ref={ref} {...rest} />;
}));

ArrowsLeftRight.displayName = 'ArrowsLeftRight';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRight, ArrowsLeftRight as ArrowsLeftRightIcon, ArrowsLeftRight as SiArrowsLeftRight };
export default ArrowsLeftRight;
