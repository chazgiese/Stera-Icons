import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalendarClockRegular } from './CalendarClockRegular.js';
import { CalendarClockRegularDuotone } from './CalendarClockRegularDuotone.js';
import { CalendarClockBold } from './CalendarClockBold.js';
import { CalendarClockBoldDuotone } from './CalendarClockBoldDuotone.js';
import { CalendarClockFill } from './CalendarClockFill.js';
import { CalendarClockFillDuotone } from './CalendarClockFillDuotone.js';

export interface CalendarClockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarClock - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarClockRegular } from 'stera-icons/icons/CalendarClockRegular';
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

// Triple export pattern (lucide-react style)
export { CalendarClock, CalendarClock as CalendarClockIcon, CalendarClock as SiCalendarClock };
export default CalendarClock;
