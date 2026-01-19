import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarFoldRegular } from './CalendarFoldRegular';
import { CalendarFoldRegularDuotone } from './CalendarFoldRegularDuotone';
import { CalendarFoldBold } from './CalendarFoldBold';
import { CalendarFoldBoldDuotone } from './CalendarFoldBoldDuotone';
import { CalendarFoldFill } from './CalendarFoldFill';
import { CalendarFoldFillDuotone } from './CalendarFoldFillDuotone';

export interface CalendarFoldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarFold - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarFoldRegular } from 'stera-icons/icons/CalendarFoldRegular';
 */
const CalendarFold = memo(forwardRef<SVGSVGElement, CalendarFoldProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarFoldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarFoldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarFoldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarFoldFill ref={ref} {...rest} />;
  if (duotone) return <CalendarFoldRegularDuotone ref={ref} {...rest} />;
  return <CalendarFoldRegular ref={ref} {...rest} />;
}));

CalendarFold.displayName = 'CalendarFold';

// Triple export pattern (lucide-react style)
export { CalendarFold, CalendarFold as CalendarFoldIcon, CalendarFold as SiCalendarFold };
export default CalendarFold;
