import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarOffIcon as RegularCalendarOffIcon } from './calendar-off';
import { CalendarOffIconDuotone as CalendarOffIconDuotone } from './calendar-off-duotone';
import { CalendarOffIconBold as CalendarOffIconBold } from './calendar-off-bold';
import { CalendarOffIconBoldDuotone as CalendarOffIconBoldDuotone } from './calendar-off-bold-duotone';
import { CalendarOffIconFill as CalendarOffIconFill } from './calendar-off-fill';
import { CalendarOffIconFillDuotone as CalendarOffIconFillDuotone } from './calendar-off-fill-duotone';

export interface CalendarOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarOffIcon = memo(forwardRef<SVGSVGElement, CalendarOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarOffIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarOffIconDuotone ref={ref} {...props} />;
  return <RegularCalendarOffIcon ref={ref} {...props} />;
}));

CalendarOffIcon.displayName = 'CalendarOffIcon';

export { CalendarOffIcon };
