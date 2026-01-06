import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarSlashIcon as RegularCalendarSlashIcon } from './calendar-slash';
import { CalendarSlashIconDuotone as CalendarSlashIconDuotone } from './calendar-slash-duotone';
import { CalendarSlashIconBold as CalendarSlashIconBold } from './calendar-slash-bold';
import { CalendarSlashIconBoldDuotone as CalendarSlashIconBoldDuotone } from './calendar-slash-bold-duotone';
import { CalendarSlashIconFill as CalendarSlashIconFill } from './calendar-slash-fill';
import { CalendarSlashIconFillDuotone as CalendarSlashIconFillDuotone } from './calendar-slash-fill-duotone';

export interface CalendarSlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarSlashIcon = memo(forwardRef<SVGSVGElement, CalendarSlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarSlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarSlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarSlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarSlashIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarSlashIconDuotone ref={ref} {...props} />;
  return <RegularCalendarSlashIcon ref={ref} {...props} />;
}));

CalendarSlashIcon.displayName = 'CalendarSlashIcon';

export { CalendarSlashIcon };
