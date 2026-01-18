import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarPlusRegular } from './CalendarPlusRegular';
import { CalendarPlusRegularDuotone } from './CalendarPlusRegularDuotone';
import { CalendarPlusBold } from './CalendarPlusBold';
import { CalendarPlusBoldDuotone } from './CalendarPlusBoldDuotone';
import { CalendarPlusFill } from './CalendarPlusFill';
import { CalendarPlusFillDuotone } from './CalendarPlusFillDuotone';

export interface CalendarPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarPlus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarPlusRegular } from 'stera-icons/CalendarPlusRegular';
 */
const CalendarPlus = memo(forwardRef<SVGSVGElement, CalendarPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarPlusFill ref={ref} {...rest} />;
  if (duotone) return <CalendarPlusRegularDuotone ref={ref} {...rest} />;
  return <CalendarPlusRegular ref={ref} {...rest} />;
}));

CalendarPlus.displayName = 'CalendarPlus';

export { CalendarPlus };
