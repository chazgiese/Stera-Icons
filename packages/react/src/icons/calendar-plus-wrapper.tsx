import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarPlusIcon as RegularCalendarPlusIcon } from './calendar-plus';
import { CalendarPlusIconBold } from './calendar-plus-bold';
import { CalendarPlusIconFilled } from './calendar-plus-filled';
import { CalendarPlusIconFilltone } from './calendar-plus-filltone';
import { CalendarPlusIconLinetone } from './calendar-plus-linetone';

export interface CalendarPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarPlusIcon = memo(forwardRef<SVGSVGElement, CalendarPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarPlusIcon ref={ref} {...props} />;
  }
}));

CalendarPlusIcon.displayName = 'CalendarPlusIcon';

export { CalendarPlusIcon };
