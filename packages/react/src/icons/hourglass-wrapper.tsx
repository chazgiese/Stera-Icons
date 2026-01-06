import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassIcon as RegularHourglassIcon } from './hourglass';
import { HourglassIconDuotone as HourglassIconDuotone } from './hourglass-duotone';
import { HourglassIconBold as HourglassIconBold } from './hourglass-bold';
import { HourglassIconBoldDuotone as HourglassIconBoldDuotone } from './hourglass-bold-duotone';
import { HourglassIconFill as HourglassIconFill } from './hourglass-fill';
import { HourglassIconFillDuotone as HourglassIconFillDuotone } from './hourglass-fill-duotone';

export interface HourglassIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HourglassIcon = memo(forwardRef<SVGSVGElement, HourglassIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HourglassIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HourglassIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HourglassIconFill ref={ref} {...props} />;
  if (duotone) return <HourglassIconDuotone ref={ref} {...props} />;
  return <RegularHourglassIcon ref={ref} {...props} />;
}));

HourglassIcon.displayName = 'HourglassIcon';

export { HourglassIcon };
