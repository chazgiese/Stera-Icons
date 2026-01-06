import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarPlusIcon as RegularCalendarPlusIcon } from './calendar-plus';
import { CalendarPlusIconDuotone as CalendarPlusIconDuotone } from './calendar-plus-duotone';
import { CalendarPlusIconBold as CalendarPlusIconBold } from './calendar-plus-bold';
import { CalendarPlusIconBoldDuotone as CalendarPlusIconBoldDuotone } from './calendar-plus-bold-duotone';
import { CalendarPlusIconFill as CalendarPlusIconFill } from './calendar-plus-fill';
import { CalendarPlusIconFillDuotone as CalendarPlusIconFillDuotone } from './calendar-plus-fill-duotone';

export interface CalendarPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarPlusIcon = memo(forwardRef<SVGSVGElement, CalendarPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarPlusIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarPlusIconDuotone ref={ref} {...props} />;
  return <RegularCalendarPlusIcon ref={ref} {...props} />;
}));

CalendarPlusIcon.displayName = 'CalendarPlusIcon';

export { CalendarPlusIcon };
