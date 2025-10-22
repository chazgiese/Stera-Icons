import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CalendarSlashIcon as CalendarSlashIconRegular } from './calendar-slash';
import { CalendarSlashIconBold } from './calendar-slash-bold';
import { CalendarSlashIconFilled } from './calendar-slash-filled';
import { CalendarSlashIconFilltone } from './calendar-slash-filltone';
import { CalendarSlashIconLinetone } from './calendar-slash-linetone';

export interface CalendarSlashIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarSlashIcon = memo(forwardRef<SVGSVGElement, CalendarSlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarSlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarSlashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CalendarSlashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CalendarSlashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CalendarSlashIconRegular ref={ref} {...props} />;
  }
}));

CalendarSlashIcon.displayName = 'CalendarSlashIcon';

export { CalendarSlashIcon };
