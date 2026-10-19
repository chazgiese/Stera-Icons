import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownLeftCircleRegular } from './ArrowDownLeftCircleRegular.js';
import { ArrowDownLeftCircleRegularDuotone } from './ArrowDownLeftCircleRegularDuotone.js';
import { ArrowDownLeftCircleBold } from './ArrowDownLeftCircleBold.js';
import { ArrowDownLeftCircleBoldDuotone } from './ArrowDownLeftCircleBoldDuotone.js';
import { ArrowDownLeftCircleFill } from './ArrowDownLeftCircleFill.js';
import { ArrowDownLeftCircleFillDuotone } from './ArrowDownLeftCircleFillDuotone.js';

export interface ArrowDownLeftCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownLeftCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownLeftCircleRegular } from 'stera-icons/icons/ArrowDownLeftCircleRegular';
 */
const ArrowDownLeftCircle = memo(forwardRef<SVGSVGElement, ArrowDownLeftCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownLeftCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownLeftCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownLeftCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownLeftCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownLeftCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownLeftCircleRegular ref={ref} {...rest} />;
}));

ArrowDownLeftCircle.displayName = 'ArrowDownLeftCircle';

// Triple export pattern
export { ArrowDownLeftCircle, ArrowDownLeftCircle as ArrowDownLeftCircleIcon, ArrowDownLeftCircle as SiArrowDownLeftCircle };
export default ArrowDownLeftCircle;
