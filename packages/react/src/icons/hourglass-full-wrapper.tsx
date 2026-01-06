import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassFullIcon as RegularHourglassFullIcon } from './hourglass-full';
import { HourglassFullIconDuotone as HourglassFullIconDuotone } from './hourglass-full-duotone';
import { HourglassFullIconBold as HourglassFullIconBold } from './hourglass-full-bold';
import { HourglassFullIconBoldDuotone as HourglassFullIconBoldDuotone } from './hourglass-full-bold-duotone';
import { HourglassFullIconFill as HourglassFullIconFill } from './hourglass-full-fill';
import { HourglassFullIconFillDuotone as HourglassFullIconFillDuotone } from './hourglass-full-fill-duotone';

export interface HourglassFullIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HourglassFullIcon = memo(forwardRef<SVGSVGElement, HourglassFullIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassFullIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HourglassFullIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HourglassFullIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HourglassFullIconFill ref={ref} {...props} />;
  if (duotone) return <HourglassFullIconDuotone ref={ref} {...props} />;
  return <RegularHourglassFullIcon ref={ref} {...props} />;
}));

HourglassFullIcon.displayName = 'HourglassFullIcon';

export { HourglassFullIcon };
