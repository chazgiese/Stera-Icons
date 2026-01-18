import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarMinusRegular } from './CalendarMinusRegular';
import { CalendarMinusRegularDuotone } from './CalendarMinusRegularDuotone';
import { CalendarMinusBold } from './CalendarMinusBold';
import { CalendarMinusBoldDuotone } from './CalendarMinusBoldDuotone';
import { CalendarMinusFill } from './CalendarMinusFill';
import { CalendarMinusFillDuotone } from './CalendarMinusFillDuotone';

export interface CalendarMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarMinus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarMinusRegular } from 'stera-icons/CalendarMinusRegular';
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

export { CalendarMinus };
