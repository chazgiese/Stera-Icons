import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarBlankIcon as RegularCalendarBlankIcon } from './calendar-blank';
import { CalendarBlankIconDuotone as CalendarBlankIconDuotone } from './calendar-blank-duotone';
import { CalendarBlankIconBold as CalendarBlankIconBold } from './calendar-blank-bold';
import { CalendarBlankIconBoldDuotone as CalendarBlankIconBoldDuotone } from './calendar-blank-bold-duotone';
import { CalendarBlankIconFill as CalendarBlankIconFill } from './calendar-blank-fill';
import { CalendarBlankIconFillDuotone as CalendarBlankIconFillDuotone } from './calendar-blank-fill-duotone';

export interface CalendarBlankIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarBlankIcon = memo(forwardRef<SVGSVGElement, CalendarBlankIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarBlankIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarBlankIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarBlankIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarBlankIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarBlankIconDuotone ref={ref} {...props} />;
  return <RegularCalendarBlankIcon ref={ref} {...props} />;
}));

CalendarBlankIcon.displayName = 'CalendarBlankIcon';

export { CalendarBlankIcon };
