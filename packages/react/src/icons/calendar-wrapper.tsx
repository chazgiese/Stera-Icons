import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarIcon as RegularCalendarIcon } from './calendar';
import { CalendarIconBold } from './calendar-bold';
import { CalendarIconFilled } from './calendar-filled';
import { CalendarIconFilltone } from './calendar-filltone';
import { CalendarIconLinetone } from './calendar-linetone';

export interface CalendarIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarIcon = memo(forwardRef<SVGSVGElement, CalendarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarIcon ref={ref} {...props} />;
  }
}));

CalendarIcon.displayName = 'CalendarIcon';

export { CalendarIcon };
