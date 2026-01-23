import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalendarBlankRegular } from './CalendarBlankRegular.js';
import { CalendarBlankRegularDuotone } from './CalendarBlankRegularDuotone.js';
import { CalendarBlankBold } from './CalendarBlankBold.js';
import { CalendarBlankBoldDuotone } from './CalendarBlankBoldDuotone.js';
import { CalendarBlankFill } from './CalendarBlankFill.js';
import { CalendarBlankFillDuotone } from './CalendarBlankFillDuotone.js';

export interface CalendarBlankProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarBlank - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarBlankRegular } from 'stera-icons/icons/CalendarBlankRegular';
 */
const CalendarBlank = memo(forwardRef<SVGSVGElement, CalendarBlankProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarBlankBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarBlankBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarBlankFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarBlankFill ref={ref} {...rest} />;
  if (duotone) return <CalendarBlankRegularDuotone ref={ref} {...rest} />;
  return <CalendarBlankRegular ref={ref} {...rest} />;
}));

CalendarBlank.displayName = 'CalendarBlank';

// Triple export pattern (lucide-react style)
export { CalendarBlank, CalendarBlank as CalendarBlankIcon, CalendarBlank as SiCalendarBlank };
export default CalendarBlank;
