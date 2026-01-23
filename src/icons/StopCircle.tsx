import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { StopCircleRegular } from './StopCircleRegular.js';
import { StopCircleRegularDuotone } from './StopCircleRegularDuotone.js';
import { StopCircleBold } from './StopCircleBold.js';
import { StopCircleBoldDuotone } from './StopCircleBoldDuotone.js';
import { StopCircleFill } from './StopCircleFill.js';
import { StopCircleFillDuotone } from './StopCircleFillDuotone.js';

export interface StopCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * StopCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { StopCircleRegular } from 'stera-icons/icons/StopCircleRegular';
 */
const StopCircle = memo(forwardRef<SVGSVGElement, StopCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StopCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StopCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StopCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StopCircleFill ref={ref} {...rest} />;
  if (duotone) return <StopCircleRegularDuotone ref={ref} {...rest} />;
  return <StopCircleRegular ref={ref} {...rest} />;
}));

StopCircle.displayName = 'StopCircle';

// Triple export pattern (lucide-react style)
export { StopCircle, StopCircle as StopCircleIcon, StopCircle as SiStopCircle };
export default StopCircle;
