import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarRegular } from './CalendarRegular';
import { CalendarRegularDuotone } from './CalendarRegularDuotone';
import { CalendarBold } from './CalendarBold';
import { CalendarBoldDuotone } from './CalendarBoldDuotone';
import { CalendarFill } from './CalendarFill';
import { CalendarFillDuotone } from './CalendarFillDuotone';

export interface CalendarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Calendar with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarRegular } from 'stera-icons/CalendarRegular';
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

export { Calendar };
