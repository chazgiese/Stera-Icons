import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalendarFoldRegular } from './CalendarFoldRegular.js';
import { CalendarFoldRegularDuotone } from './CalendarFoldRegularDuotone.js';
import { CalendarFoldBold } from './CalendarFoldBold.js';
import { CalendarFoldBoldDuotone } from './CalendarFoldBoldDuotone.js';
import { CalendarFoldFill } from './CalendarFoldFill.js';
import { CalendarFoldFillDuotone } from './CalendarFoldFillDuotone.js';

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
