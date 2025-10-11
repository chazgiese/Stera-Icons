import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarSlashIcon as CalendarSlashIconRegular } from './calendar-slash';
import { CalendarSlashIconBold } from './calendar-slash-bold';
import { CalendarSlashIconFilled } from './calendar-slash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CalendarSlashIconRegular ref={ref} {...props} />;
  }
}));

CalendarSlashIcon.displayName = 'CalendarSlashIcon';

export { CalendarSlashIcon };
