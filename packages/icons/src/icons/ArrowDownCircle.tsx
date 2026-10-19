import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownCircleRegular } from './ArrowDownCircleRegular.js';
import { ArrowDownCircleRegularDuotone } from './ArrowDownCircleRegularDuotone.js';
import { ArrowDownCircleBold } from './ArrowDownCircleBold.js';
import { ArrowDownCircleBoldDuotone } from './ArrowDownCircleBoldDuotone.js';
import { ArrowDownCircleFill } from './ArrowDownCircleFill.js';
import { ArrowDownCircleFillDuotone } from './ArrowDownCircleFillDuotone.js';

export interface ArrowDownCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownCircleRegular } from 'stera-icons/icons/ArrowDownCircleRegular';
 */
const ArrowDownCircle = memo(forwardRef<SVGSVGElement, ArrowDownCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownCircleRegular ref={ref} {...rest} />;
}));

ArrowDownCircle.displayName = 'ArrowDownCircle';

// Triple export pattern
export { ArrowDownCircle, ArrowDownCircle as ArrowDownCircleIcon, ArrowDownCircle as SiArrowDownCircle };
export default ArrowDownCircle;
