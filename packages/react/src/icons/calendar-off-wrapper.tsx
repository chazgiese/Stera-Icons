import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarOffIcon as RegularCalendarOffIcon } from './calendar-off';
import { CalendarOffIconBold } from './calendar-off-bold';
import { CalendarOffIconFilled } from './calendar-off-filled';
import { CalendarOffIconFilltone } from './calendar-off-filltone';
import { CalendarOffIconLinetone } from './calendar-off-linetone';

export interface CalendarOffIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarOffIcon = memo(forwardRef<SVGSVGElement, CalendarOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarOffIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarOffIcon ref={ref} {...props} />;
  }
}));

CalendarOffIcon.displayName = 'CalendarOffIcon';

export { CalendarOffIcon };
