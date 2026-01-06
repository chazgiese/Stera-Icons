import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ClockIcon as RegularClockIcon } from './clock';
import { ClockIconDuotone as ClockIconDuotone } from './clock-duotone';
import { ClockIconBold as ClockIconBold } from './clock-bold';
import { ClockIconBoldDuotone as ClockIconBoldDuotone } from './clock-bold-duotone';
import { ClockIconFill as ClockIconFill } from './clock-fill';
import { ClockIconFillDuotone as ClockIconFillDuotone } from './clock-fill-duotone';

export interface ClockIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ClockIcon = memo(forwardRef<SVGSVGElement, ClockIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ClockIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ClockIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ClockIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ClockIconFill ref={ref} {...props} />;
  if (duotone) return <ClockIconDuotone ref={ref} {...props} />;
  return <RegularClockIcon ref={ref} {...props} />;
}));

ClockIcon.displayName = 'ClockIcon';

export { ClockIcon };
