import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronLeftCircleRegular } from './ChevronLeftCircleRegular.js';
import { ChevronLeftCircleRegularDuotone } from './ChevronLeftCircleRegularDuotone.js';
import { ChevronLeftCircleBold } from './ChevronLeftCircleBold.js';
import { ChevronLeftCircleBoldDuotone } from './ChevronLeftCircleBoldDuotone.js';
import { ChevronLeftCircleFill } from './ChevronLeftCircleFill.js';
import { ChevronLeftCircleFillDuotone } from './ChevronLeftCircleFillDuotone.js';

export interface ChevronLeftCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronLeftCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronLeftCircleRegular } from 'stera-icons/icons/ChevronLeftCircleRegular';
 */
const ChevronLeftCircle = memo(forwardRef<SVGSVGElement, ChevronLeftCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronLeftCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronLeftCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronLeftCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronLeftCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronLeftCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronLeftCircleRegular ref={ref} {...rest} />;
}));

ChevronLeftCircle.displayName = 'ChevronLeftCircle';

// Triple export pattern
export { ChevronLeftCircle, ChevronLeftCircle as ChevronLeftCircleIcon, ChevronLeftCircle as SiChevronLeftCircle };
export default ChevronLeftCircle;
