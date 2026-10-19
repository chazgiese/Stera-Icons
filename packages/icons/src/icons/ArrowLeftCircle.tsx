import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowLeftCircleRegular } from './ArrowLeftCircleRegular.js';
import { ArrowLeftCircleRegularDuotone } from './ArrowLeftCircleRegularDuotone.js';
import { ArrowLeftCircleBold } from './ArrowLeftCircleBold.js';
import { ArrowLeftCircleBoldDuotone } from './ArrowLeftCircleBoldDuotone.js';
import { ArrowLeftCircleFill } from './ArrowLeftCircleFill.js';
import { ArrowLeftCircleFillDuotone } from './ArrowLeftCircleFillDuotone.js';

export interface ArrowLeftCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLeftCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLeftCircleRegular } from 'stera-icons/icons/ArrowLeftCircleRegular';
 */
const ArrowLeftCircle = memo(forwardRef<SVGSVGElement, ArrowLeftCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLeftCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLeftCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLeftCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLeftCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowLeftCircleRegular ref={ref} {...rest} />;
}));

ArrowLeftCircle.displayName = 'ArrowLeftCircle';

// Triple export pattern
export { ArrowLeftCircle, ArrowLeftCircle as ArrowLeftCircleIcon, ArrowLeftCircle as SiArrowLeftCircle };
export default ArrowLeftCircle;
