import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullDownCircleRegular } from './ChevronFullDownCircleRegular.js';
import { ChevronFullDownCircleRegularDuotone } from './ChevronFullDownCircleRegularDuotone.js';
import { ChevronFullDownCircleBold } from './ChevronFullDownCircleBold.js';
import { ChevronFullDownCircleBoldDuotone } from './ChevronFullDownCircleBoldDuotone.js';
import { ChevronFullDownCircleFill } from './ChevronFullDownCircleFill.js';
import { ChevronFullDownCircleFillDuotone } from './ChevronFullDownCircleFillDuotone.js';

export interface ChevronFullDownCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullDownCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullDownCircleRegular } from 'stera-icons/icons/ChevronFullDownCircleRegular';
 */
const ChevronFullDownCircle = memo(forwardRef<SVGSVGElement, ChevronFullDownCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullDownCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullDownCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullDownCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullDownCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullDownCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullDownCircleRegular ref={ref} {...rest} />;
}));

ChevronFullDownCircle.displayName = 'ChevronFullDownCircle';

// Triple export pattern
export { ChevronFullDownCircle, ChevronFullDownCircle as ChevronFullDownCircleIcon, ChevronFullDownCircle as SiChevronFullDownCircle };
export default ChevronFullDownCircle;
