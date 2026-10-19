import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpRightCircleRegular } from './ArrowUpRightCircleRegular.js';
import { ArrowUpRightCircleRegularDuotone } from './ArrowUpRightCircleRegularDuotone.js';
import { ArrowUpRightCircleBold } from './ArrowUpRightCircleBold.js';
import { ArrowUpRightCircleBoldDuotone } from './ArrowUpRightCircleBoldDuotone.js';
import { ArrowUpRightCircleFill } from './ArrowUpRightCircleFill.js';
import { ArrowUpRightCircleFillDuotone } from './ArrowUpRightCircleFillDuotone.js';

export interface ArrowUpRightCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpRightCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpRightCircleRegular } from 'stera-icons/icons/ArrowUpRightCircleRegular';
 */
const ArrowUpRightCircle = memo(forwardRef<SVGSVGElement, ArrowUpRightCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpRightCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpRightCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpRightCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpRightCircleRegular ref={ref} {...rest} />;
}));

ArrowUpRightCircle.displayName = 'ArrowUpRightCircle';

// Triple export pattern
export { ArrowUpRightCircle, ArrowUpRightCircle as ArrowUpRightCircleIcon, ArrowUpRightCircle as SiArrowUpRightCircle };
export default ArrowUpRightCircle;
