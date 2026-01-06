import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StopCircleIcon as RegularStopCircleIcon } from './stop-circle';
import { StopCircleIconDuotone as StopCircleIconDuotone } from './stop-circle-duotone';
import { StopCircleIconBold as StopCircleIconBold } from './stop-circle-bold';
import { StopCircleIconBoldDuotone as StopCircleIconBoldDuotone } from './stop-circle-bold-duotone';
import { StopCircleIconFill as StopCircleIconFill } from './stop-circle-fill';
import { StopCircleIconFillDuotone as StopCircleIconFillDuotone } from './stop-circle-fill-duotone';

export interface StopCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const StopCircleIcon = memo(forwardRef<SVGSVGElement, StopCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <StopCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <StopCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <StopCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <StopCircleIconFill ref={ref} {...props} />;
  if (duotone) return <StopCircleIconDuotone ref={ref} {...props} />;
  return <RegularStopCircleIcon ref={ref} {...props} />;
}));

StopCircleIcon.displayName = 'StopCircleIcon';

export { StopCircleIcon };
