import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StopwatchIcon as RegularStopwatchIcon } from './stopwatch';
import { StopwatchIconDuotone as StopwatchIconDuotone } from './stopwatch-duotone';
import { StopwatchIconBold as StopwatchIconBold } from './stopwatch-bold';
import { StopwatchIconBoldDuotone as StopwatchIconBoldDuotone } from './stopwatch-bold-duotone';
import { StopwatchIconFill as StopwatchIconFill } from './stopwatch-fill';
import { StopwatchIconFillDuotone as StopwatchIconFillDuotone } from './stopwatch-fill-duotone';

export interface StopwatchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const StopwatchIcon = memo(forwardRef<SVGSVGElement, StopwatchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <StopwatchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <StopwatchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <StopwatchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <StopwatchIconFill ref={ref} {...props} />;
  if (duotone) return <StopwatchIconDuotone ref={ref} {...props} />;
  return <RegularStopwatchIcon ref={ref} {...props} />;
}));

StopwatchIcon.displayName = 'StopwatchIcon';

export { StopwatchIcon };
