import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowCircleRightRegular } from './ArrowCircleRightRegular.js';
import { ArrowCircleRightRegularDuotone } from './ArrowCircleRightRegularDuotone.js';
import { ArrowCircleRightBold } from './ArrowCircleRightBold.js';
import { ArrowCircleRightBoldDuotone } from './ArrowCircleRightBoldDuotone.js';
import { ArrowCircleRightFill } from './ArrowCircleRightFill.js';
import { ArrowCircleRightFillDuotone } from './ArrowCircleRightFillDuotone.js';

export interface ArrowCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleRightRegular } from 'stera-icons/icons/ArrowCircleRightRegular';
 */
const ArrowCircleRight = memo(forwardRef<SVGSVGElement, ArrowCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleRightRegular ref={ref} {...rest} />;
}));

ArrowCircleRight.displayName = 'ArrowCircleRight';

// Triple export pattern (lucide-react style)
export { ArrowCircleRight, ArrowCircleRight as ArrowCircleRightIcon, ArrowCircleRight as SiArrowCircleRight };
export default ArrowCircleRight;
