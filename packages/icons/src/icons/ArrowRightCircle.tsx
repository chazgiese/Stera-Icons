import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowRightCircleRegular } from './ArrowRightCircleRegular.js';
import { ArrowRightCircleRegularDuotone } from './ArrowRightCircleRegularDuotone.js';
import { ArrowRightCircleBold } from './ArrowRightCircleBold.js';
import { ArrowRightCircleBoldDuotone } from './ArrowRightCircleBoldDuotone.js';
import { ArrowRightCircleFill } from './ArrowRightCircleFill.js';
import { ArrowRightCircleFillDuotone } from './ArrowRightCircleFillDuotone.js';

export interface ArrowRightCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowRightCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowRightCircleRegular } from 'stera-icons/icons/ArrowRightCircleRegular';
 */
const ArrowRightCircle = memo(forwardRef<SVGSVGElement, ArrowRightCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowRightCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowRightCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowRightCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowRightCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowRightCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowRightCircleRegular ref={ref} {...rest} />;
}));

ArrowRightCircle.displayName = 'ArrowRightCircle';

// Triple export pattern
export { ArrowRightCircle, ArrowRightCircle as ArrowRightCircleIcon, ArrowRightCircle as SiArrowRightCircle };
export default ArrowRightCircle;
