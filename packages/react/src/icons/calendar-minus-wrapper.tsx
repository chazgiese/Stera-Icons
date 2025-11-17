import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarMinusIcon as RegularCalendarMinusIcon } from './calendar-minus';
import { CalendarMinusIconBold } from './calendar-minus-bold';
import { CalendarMinusIconFilled } from './calendar-minus-filled';
import { CalendarMinusIconFilltone } from './calendar-minus-filltone';
import { CalendarMinusIconLinetone } from './calendar-minus-linetone';

export interface CalendarMinusIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarMinusIcon = memo(forwardRef<SVGSVGElement, CalendarMinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarMinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarMinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarMinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarMinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCalendarMinusIcon ref={ref} {...props} />;
  }
}));

CalendarMinusIcon.displayName = 'CalendarMinusIcon';

export { CalendarMinusIcon };
