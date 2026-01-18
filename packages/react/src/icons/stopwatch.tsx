import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StopwatchRegular } from './StopwatchRegular';
import { StopwatchRegularDuotone } from './StopwatchRegularDuotone';
import { StopwatchBold } from './StopwatchBold';
import { StopwatchBoldDuotone } from './StopwatchBoldDuotone';
import { StopwatchFill } from './StopwatchFill';
import { StopwatchFillDuotone } from './StopwatchFillDuotone';

export interface StopwatchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Stopwatch with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { StopwatchRegular } from 'stera-icons/StopwatchRegular';
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

export { Stopwatch };
