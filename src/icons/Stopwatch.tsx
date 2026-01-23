import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { StopwatchRegular } from './StopwatchRegular.js';
import { StopwatchRegularDuotone } from './StopwatchRegularDuotone.js';
import { StopwatchBold } from './StopwatchBold.js';
import { StopwatchBoldDuotone } from './StopwatchBoldDuotone.js';
import { StopwatchFill } from './StopwatchFill.js';
import { StopwatchFillDuotone } from './StopwatchFillDuotone.js';

export interface StopwatchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Stopwatch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { StopwatchRegular } from 'stera-icons/icons/StopwatchRegular';
 */
const Stopwatch = memo(forwardRef<SVGSVGElement, StopwatchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StopwatchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StopwatchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StopwatchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StopwatchFill ref={ref} {...rest} />;
  if (duotone) return <StopwatchRegularDuotone ref={ref} {...rest} />;
  return <StopwatchRegular ref={ref} {...rest} />;
}));

Stopwatch.displayName = 'Stopwatch';

// Triple export pattern (lucide-react style)
export { Stopwatch, Stopwatch as StopwatchIcon, Stopwatch as SiStopwatch };
export default Stopwatch;
