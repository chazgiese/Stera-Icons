import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarMinusIcon as RegularCalendarMinusIcon } from './calendar-minus';
import { CalendarMinusIconDuotone as CalendarMinusIconDuotone } from './calendar-minus-duotone';
import { CalendarMinusIconBold as CalendarMinusIconBold } from './calendar-minus-bold';
import { CalendarMinusIconBoldDuotone as CalendarMinusIconBoldDuotone } from './calendar-minus-bold-duotone';
import { CalendarMinusIconFill as CalendarMinusIconFill } from './calendar-minus-fill';
import { CalendarMinusIconFillDuotone as CalendarMinusIconFillDuotone } from './calendar-minus-fill-duotone';

export interface CalendarMinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalendarMinusIcon = memo(forwardRef<SVGSVGElement, CalendarMinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarMinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalendarMinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalendarMinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalendarMinusIconFill ref={ref} {...props} />;
  if (duotone) return <CalendarMinusIconDuotone ref={ref} {...props} />;
  return <RegularCalendarMinusIcon ref={ref} {...props} />;
}));

CalendarMinusIcon.displayName = 'CalendarMinusIcon';

export { CalendarMinusIcon };
