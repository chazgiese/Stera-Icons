import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarClockIcon as RegularCalendarClockIcon } from './calendar-clock';
import { CalendarClockIconBold } from './calendar-clock-bold';
import { CalendarClockIconFilled } from './calendar-clock-filled';
import { CalendarClockIconFilltone } from './calendar-clock-filltone';
import { CalendarClockIconLinetone } from './calendar-clock-linetone';

export interface CalendarClockIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarClockIcon = memo(forwardRef<SVGSVGElement, CalendarClockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarClockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarClockIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarClockIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarClockIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarClockIcon ref={ref} {...props} />;
  }
}));

CalendarClockIcon.displayName = 'CalendarClockIcon';

export { CalendarClockIcon };
