import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullLeftCircleRegular } from './ChevronFullLeftCircleRegular.js';
import { ChevronFullLeftCircleRegularDuotone } from './ChevronFullLeftCircleRegularDuotone.js';
import { ChevronFullLeftCircleBold } from './ChevronFullLeftCircleBold.js';
import { ChevronFullLeftCircleBoldDuotone } from './ChevronFullLeftCircleBoldDuotone.js';
import { ChevronFullLeftCircleFill } from './ChevronFullLeftCircleFill.js';
import { ChevronFullLeftCircleFillDuotone } from './ChevronFullLeftCircleFillDuotone.js';

export interface ChevronFullLeftCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullLeftCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullLeftCircleRegular } from 'stera-icons/icons/ChevronFullLeftCircleRegular';
 */
const ChevronFullLeftCircle = memo(forwardRef<SVGSVGElement, ChevronFullLeftCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullLeftCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullLeftCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullLeftCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullLeftCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullLeftCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullLeftCircleRegular ref={ref} {...rest} />;
}));

ChevronFullLeftCircle.displayName = 'ChevronFullLeftCircle';

// Triple export pattern
export { ChevronFullLeftCircle, ChevronFullLeftCircle as ChevronFullLeftCircleIcon, ChevronFullLeftCircle as SiChevronFullLeftCircle };
export default ChevronFullLeftCircle;
