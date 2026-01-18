import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarXRegular } from './CalendarXRegular';
import { CalendarXRegularDuotone } from './CalendarXRegularDuotone';
import { CalendarXBold } from './CalendarXBold';
import { CalendarXBoldDuotone } from './CalendarXBoldDuotone';
import { CalendarXFill } from './CalendarXFill';
import { CalendarXFillDuotone } from './CalendarXFillDuotone';

export interface CalendarXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarX with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarXRegular } from 'stera-icons/CalendarXRegular';
 */
const CalendarX = memo(forwardRef<SVGSVGElement, CalendarXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarXFill ref={ref} {...rest} />;
  if (duotone) return <CalendarXRegularDuotone ref={ref} {...rest} />;
  return <CalendarXRegular ref={ref} {...rest} />;
}));

CalendarX.displayName = 'CalendarX';

export { CalendarX };
