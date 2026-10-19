import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpLeftCircleRegular } from './ArrowUpLeftCircleRegular.js';
import { ArrowUpLeftCircleRegularDuotone } from './ArrowUpLeftCircleRegularDuotone.js';
import { ArrowUpLeftCircleBold } from './ArrowUpLeftCircleBold.js';
import { ArrowUpLeftCircleBoldDuotone } from './ArrowUpLeftCircleBoldDuotone.js';
import { ArrowUpLeftCircleFill } from './ArrowUpLeftCircleFill.js';
import { ArrowUpLeftCircleFillDuotone } from './ArrowUpLeftCircleFillDuotone.js';

export interface ArrowUpLeftCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpLeftCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpLeftCircleRegular } from 'stera-icons/icons/ArrowUpLeftCircleRegular';
 */
const ArrowUpLeftCircle = memo(forwardRef<SVGSVGElement, ArrowUpLeftCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpLeftCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpLeftCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpLeftCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpLeftCircleRegular ref={ref} {...rest} />;
}));

ArrowUpLeftCircle.displayName = 'ArrowUpLeftCircle';

// Triple export pattern
export { ArrowUpLeftCircle, ArrowUpLeftCircle as ArrowUpLeftCircleIcon, ArrowUpLeftCircle as SiArrowUpLeftCircle };
export default ArrowUpLeftCircle;
