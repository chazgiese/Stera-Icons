import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalendarSlashRegular } from './CalendarSlashRegular.js';
import { CalendarSlashRegularDuotone } from './CalendarSlashRegularDuotone.js';
import { CalendarSlashBold } from './CalendarSlashBold.js';
import { CalendarSlashBoldDuotone } from './CalendarSlashBoldDuotone.js';
import { CalendarSlashFill } from './CalendarSlashFill.js';
import { CalendarSlashFillDuotone } from './CalendarSlashFillDuotone.js';

export interface CalendarSlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarSlash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarSlashRegular } from 'stera-icons/icons/CalendarSlashRegular';
 */
const CalendarSlash = memo(forwardRef<SVGSVGElement, CalendarSlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarSlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarSlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarSlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarSlashFill ref={ref} {...rest} />;
  if (duotone) return <CalendarSlashRegularDuotone ref={ref} {...rest} />;
  return <CalendarSlashRegular ref={ref} {...rest} />;
}));

CalendarSlash.displayName = 'CalendarSlash';

// Triple export pattern (lucide-react style)
export { CalendarSlash, CalendarSlash as CalendarSlashIcon, CalendarSlash as SiCalendarSlash };
export default CalendarSlash;
