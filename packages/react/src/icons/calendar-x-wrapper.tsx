import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarXIcon as CalendarXIconRegular } from './calendar-x';
import { CalendarXIconBold } from './calendar-x-bold';
import { CalendarXIconFilled } from './calendar-x-filled';
import { CalendarXIconFilltone } from './calendar-x-filltone';
import { CalendarXIconLinetone } from './calendar-x-linetone';

export interface CalendarXIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarXIcon = memo(forwardRef<SVGSVGElement, CalendarXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CalendarXIconRegular ref={ref} {...props} />;
  }
}));

CalendarXIcon.displayName = 'CalendarXIcon';

export { CalendarXIcon };
