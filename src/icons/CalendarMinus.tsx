import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalendarMinusRegular } from './CalendarMinusRegular.js';
import { CalendarMinusRegularDuotone } from './CalendarMinusRegularDuotone.js';
import { CalendarMinusBold } from './CalendarMinusBold.js';
import { CalendarMinusBoldDuotone } from './CalendarMinusBoldDuotone.js';
import { CalendarMinusFill } from './CalendarMinusFill.js';
import { CalendarMinusFillDuotone } from './CalendarMinusFillDuotone.js';

export interface CalendarMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarMinusRegular } from 'stera-icons/icons/CalendarMinusRegular';
 */
const CalendarMinus = memo(forwardRef<SVGSVGElement, CalendarMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarMinusFill ref={ref} {...rest} />;
  if (duotone) return <CalendarMinusRegularDuotone ref={ref} {...rest} />;
  return <CalendarMinusRegular ref={ref} {...rest} />;
}));

CalendarMinus.displayName = 'CalendarMinus';

// Triple export pattern (lucide-react style)
export { CalendarMinus, CalendarMinus as CalendarMinusIcon, CalendarMinus as SiCalendarMinus };
export default CalendarMinus;
