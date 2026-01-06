import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarIcon as RegularCalendarIcon } from './calendar';
import { CalendarIconDuotone as CalendarIconDuotone } from './calendar-duotone';
import { CalendarIconBold as CalendarIconBold } from './calendar-bold';
import { CalendarIconBoldDuotone as CalendarIconBoldDuotone } from './calendar-bold-duotone';
import { CalendarIconFill as CalendarIconFill } from './calendar-fill';
import { CalendarIconFillDuotone as CalendarIconFillDuotone } from './calendar-fill-duotone';

export interface CalendarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarIcon = memo(forwardRef<SVGSVGElement, CalendarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarIconDuotone ref={ref} {...props} />;
  return <RegularCalendarIcon ref={ref} {...props} />;
}));

CalendarIcon.displayName = 'CalendarIcon';

export { CalendarIcon };
