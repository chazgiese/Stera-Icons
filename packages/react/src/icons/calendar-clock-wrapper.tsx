import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarClockIcon as RegularCalendarClockIcon } from './calendar-clock';
import { CalendarClockIconDuotone as CalendarClockIconDuotone } from './calendar-clock-duotone';
import { CalendarClockIconBold as CalendarClockIconBold } from './calendar-clock-bold';
import { CalendarClockIconBoldDuotone as CalendarClockIconBoldDuotone } from './calendar-clock-bold-duotone';
import { CalendarClockIconFill as CalendarClockIconFill } from './calendar-clock-fill';
import { CalendarClockIconFillDuotone as CalendarClockIconFillDuotone } from './calendar-clock-fill-duotone';

export interface CalendarClockIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarClockIcon = memo(forwardRef<SVGSVGElement, CalendarClockIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarClockIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarClockIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarClockIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarClockIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarClockIconDuotone ref={ref} {...props} />;
  return <RegularCalendarClockIcon ref={ref} {...props} />;
}));

CalendarClockIcon.displayName = 'CalendarClockIcon';

export { CalendarClockIcon };
