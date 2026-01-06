import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassEmptyIcon as RegularHourglassEmptyIcon } from './hourglass-empty';
import { HourglassEmptyIconDuotone as HourglassEmptyIconDuotone } from './hourglass-empty-duotone';
import { HourglassEmptyIconBold as HourglassEmptyIconBold } from './hourglass-empty-bold';
import { HourglassEmptyIconBoldDuotone as HourglassEmptyIconBoldDuotone } from './hourglass-empty-bold-duotone';
import { HourglassEmptyIconFill as HourglassEmptyIconFill } from './hourglass-empty-fill';
import { HourglassEmptyIconFillDuotone as HourglassEmptyIconFillDuotone } from './hourglass-empty-fill-duotone';

export interface HourglassEmptyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HourglassEmptyIcon = memo(forwardRef<SVGSVGElement, HourglassEmptyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassEmptyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HourglassEmptyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HourglassEmptyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HourglassEmptyIconFill ref={ref} {...props} />;
  if (duotone) return <HourglassEmptyIconDuotone ref={ref} {...props} />;
  return <RegularHourglassEmptyIcon ref={ref} {...props} />;
}));

HourglassEmptyIcon.displayName = 'HourglassEmptyIcon';

export { HourglassEmptyIcon };
