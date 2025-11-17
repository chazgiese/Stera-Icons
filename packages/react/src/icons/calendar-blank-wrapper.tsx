import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarBlankIcon as RegularCalendarBlankIcon } from './calendar-blank';
import { CalendarBlankIconBold } from './calendar-blank-bold';
import { CalendarBlankIconFilled } from './calendar-blank-filled';
import { CalendarBlankIconFilltone } from './calendar-blank-filltone';
import { CalendarBlankIconLinetone } from './calendar-blank-linetone';

export interface CalendarBlankIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarBlankIcon = memo(forwardRef<SVGSVGElement, CalendarBlankIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarBlankIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarBlankIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarBlankIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarBlankIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarBlankIcon ref={ref} {...props} />;
  }
}));

CalendarBlankIcon.displayName = 'CalendarBlankIcon';

export { CalendarBlankIcon };
