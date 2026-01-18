import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarClockRegular } from './CalendarClockRegular';
import { CalendarClockRegularDuotone } from './CalendarClockRegularDuotone';
import { CalendarClockBold } from './CalendarClockBold';
import { CalendarClockBoldDuotone } from './CalendarClockBoldDuotone';
import { CalendarClockFill } from './CalendarClockFill';
import { CalendarClockFillDuotone } from './CalendarClockFillDuotone';

export interface CalendarClockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarClock with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarClockRegular } from 'stera-icons/CalendarClockRegular';
 */
const CalendarClock = memo(forwardRef<SVGSVGElement, CalendarClockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarClockBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarClockBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarClockFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarClockFill ref={ref} {...rest} />;
  if (duotone) return <CalendarClockRegularDuotone ref={ref} {...rest} />;
  return <CalendarClockRegular ref={ref} {...rest} />;
}));

CalendarClock.displayName = 'CalendarClock';

export { CalendarClock };
