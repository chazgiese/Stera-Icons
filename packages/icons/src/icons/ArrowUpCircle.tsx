import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpCircleRegular } from './ArrowUpCircleRegular.js';
import { ArrowUpCircleRegularDuotone } from './ArrowUpCircleRegularDuotone.js';
import { ArrowUpCircleBold } from './ArrowUpCircleBold.js';
import { ArrowUpCircleBoldDuotone } from './ArrowUpCircleBoldDuotone.js';
import { ArrowUpCircleFill } from './ArrowUpCircleFill.js';
import { ArrowUpCircleFillDuotone } from './ArrowUpCircleFillDuotone.js';

export interface ArrowUpCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpCircleRegular } from 'stera-icons/icons/ArrowUpCircleRegular';
 */
const ArrowUpCircle = memo(forwardRef<SVGSVGElement, ArrowUpCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpCircleRegular ref={ref} {...rest} />;
}));

ArrowUpCircle.displayName = 'ArrowUpCircle';

// Triple export pattern
export { ArrowUpCircle, ArrowUpCircle as ArrowUpCircleIcon, ArrowUpCircle as SiArrowUpCircle };
export default ArrowUpCircle;
