import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarFoldIcon as RegularCalendarFoldIcon } from './calendar-fold';
import { CalendarFoldIconDuotone as CalendarFoldIconDuotone } from './calendar-fold-duotone';
import { CalendarFoldIconBold as CalendarFoldIconBold } from './calendar-fold-bold';
import { CalendarFoldIconBoldDuotone as CalendarFoldIconBoldDuotone } from './calendar-fold-bold-duotone';
import { CalendarFoldIconFill as CalendarFoldIconFill } from './calendar-fold-fill';
import { CalendarFoldIconFillDuotone as CalendarFoldIconFillDuotone } from './calendar-fold-fill-duotone';

export interface CalendarFoldIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarFoldIcon = memo(forwardRef<SVGSVGElement, CalendarFoldIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarFoldIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarFoldIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarFoldIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarFoldIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarFoldIconDuotone ref={ref} {...props} />;
  return <RegularCalendarFoldIcon ref={ref} {...props} />;
}));

CalendarFoldIcon.displayName = 'CalendarFoldIcon';

export { CalendarFoldIcon };
