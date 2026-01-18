import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StopCircleRegular } from './StopCircleRegular';
import { StopCircleRegularDuotone } from './StopCircleRegularDuotone';
import { StopCircleBold } from './StopCircleBold';
import { StopCircleBoldDuotone } from './StopCircleBoldDuotone';
import { StopCircleFill } from './StopCircleFill';
import { StopCircleFillDuotone } from './StopCircleFillDuotone';

export interface StopCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * StopCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { StopCircleRegular } from 'stera-icons/StopCircleRegular';
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
