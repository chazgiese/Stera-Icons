import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronDownCircleRegular } from './ChevronDownCircleRegular.js';
import { ChevronDownCircleRegularDuotone } from './ChevronDownCircleRegularDuotone.js';
import { ChevronDownCircleBold } from './ChevronDownCircleBold.js';
import { ChevronDownCircleBoldDuotone } from './ChevronDownCircleBoldDuotone.js';
import { ChevronDownCircleFill } from './ChevronDownCircleFill.js';
import { ChevronDownCircleFillDuotone } from './ChevronDownCircleFillDuotone.js';

export interface ChevronDownCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronDownCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronDownCircleRegular } from 'stera-icons/icons/ChevronDownCircleRegular';
 */
const ChevronDownCircle = memo(forwardRef<SVGSVGElement, ChevronDownCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronDownCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronDownCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronDownCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronDownCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronDownCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronDownCircleRegular ref={ref} {...rest} />;
}));

ChevronDownCircle.displayName = 'ChevronDownCircle';

// Triple export pattern
export { ChevronDownCircle, ChevronDownCircle as ChevronDownCircleIcon, ChevronDownCircle as SiChevronDownCircle };
export default ChevronDownCircle;
