import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarFoldIcon as RegularCalendarFoldIcon } from './calendar-fold';
import { CalendarFoldIconBold } from './calendar-fold-bold';
import { CalendarFoldIconFilled } from './calendar-fold-filled';
import { CalendarFoldIconFilltone } from './calendar-fold-filltone';
import { CalendarFoldIconLinetone } from './calendar-fold-linetone';

export interface CalendarFoldIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarFoldIcon = memo(forwardRef<SVGSVGElement, CalendarFoldIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarFoldIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarFoldIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarFoldIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarFoldIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarFoldIcon ref={ref} {...props} />;
  }
}));

CalendarFoldIcon.displayName = 'CalendarFoldIcon';

export { CalendarFoldIcon };
