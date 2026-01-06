import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarXIcon as RegularCalendarXIcon } from './calendar-x';
import { CalendarXIconDuotone as CalendarXIconDuotone } from './calendar-x-duotone';
import { CalendarXIconBold as CalendarXIconBold } from './calendar-x-bold';
import { CalendarXIconBoldDuotone as CalendarXIconBoldDuotone } from './calendar-x-bold-duotone';
import { CalendarXIconFill as CalendarXIconFill } from './calendar-x-fill';
import { CalendarXIconFillDuotone as CalendarXIconFillDuotone } from './calendar-x-fill-duotone';

export interface CalendarXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarXIcon = memo(forwardRef<SVGSVGElement, CalendarXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarXIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarXIconDuotone ref={ref} {...props} />;
  return <RegularCalendarXIcon ref={ref} {...props} />;
}));

CalendarXIcon.displayName = 'CalendarXIcon';

export { CalendarXIcon };
