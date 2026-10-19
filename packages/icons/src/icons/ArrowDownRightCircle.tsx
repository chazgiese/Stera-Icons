import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownRightCircleRegular } from './ArrowDownRightCircleRegular.js';
import { ArrowDownRightCircleRegularDuotone } from './ArrowDownRightCircleRegularDuotone.js';
import { ArrowDownRightCircleBold } from './ArrowDownRightCircleBold.js';
import { ArrowDownRightCircleBoldDuotone } from './ArrowDownRightCircleBoldDuotone.js';
import { ArrowDownRightCircleFill } from './ArrowDownRightCircleFill.js';
import { ArrowDownRightCircleFillDuotone } from './ArrowDownRightCircleFillDuotone.js';

export interface ArrowDownRightCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownRightCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownRightCircleRegular } from 'stera-icons/icons/ArrowDownRightCircleRegular';
 */
const ArrowDownRightCircle = memo(forwardRef<SVGSVGElement, ArrowDownRightCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownRightCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownRightCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownRightCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownRightCircleFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownRightCircleRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownRightCircleRegular ref={ref} {...rest} />;
}));

ArrowDownRightCircle.displayName = 'ArrowDownRightCircle';

// Triple export pattern
export { ArrowDownRightCircle, ArrowDownRightCircle as ArrowDownRightCircleIcon, ArrowDownRightCircle as SiArrowDownRightCircle };
export default ArrowDownRightCircle;
