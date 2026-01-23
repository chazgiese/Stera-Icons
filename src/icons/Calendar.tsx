import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalendarRegular } from './CalendarRegular.js';
import { CalendarRegularDuotone } from './CalendarRegularDuotone.js';
import { CalendarBold } from './CalendarBold.js';
import { CalendarBoldDuotone } from './CalendarBoldDuotone.js';
import { CalendarFill } from './CalendarFill.js';
import { CalendarFillDuotone } from './CalendarFillDuotone.js';

export interface CalendarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Calendar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarRegular } from 'stera-icons/icons/CalendarRegular';
 */
const Calendar = memo(forwardRef<SVGSVGElement, CalendarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarFill ref={ref} {...rest} />;
  if (duotone) return <CalendarRegularDuotone ref={ref} {...rest} />;
  return <CalendarRegular ref={ref} {...rest} />;
}));

Calendar.displayName = 'Calendar';

// Triple export pattern (lucide-react style)
export { Calendar, Calendar as CalendarIcon, Calendar as SiCalendar };
export default Calendar;
