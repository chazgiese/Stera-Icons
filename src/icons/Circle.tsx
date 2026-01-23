import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleRegular } from './CircleRegular.js';
import { CircleRegularDuotone } from './CircleRegularDuotone.js';
import { CircleBold } from './CircleBold.js';
import { CircleBoldDuotone } from './CircleBoldDuotone.js';
import { CircleFill } from './CircleFill.js';
import { CircleFillDuotone } from './CircleFillDuotone.js';

export interface CircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Circle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleRegular } from 'stera-icons/icons/CircleRegular';
 */
const Circle = memo(forwardRef<SVGSVGElement, CircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleFill ref={ref} {...rest} />;
  if (duotone) return <CircleRegularDuotone ref={ref} {...rest} />;
  return <CircleRegular ref={ref} {...rest} />;
}));

Circle.displayName = 'Circle';

// Triple export pattern (lucide-react style)
export { Circle, Circle as CircleIcon, Circle as SiCircle };
export default Circle;
