import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarBlankRegular } from './CalendarBlankRegular';
import { CalendarBlankRegularDuotone } from './CalendarBlankRegularDuotone';
import { CalendarBlankBold } from './CalendarBlankBold';
import { CalendarBlankBoldDuotone } from './CalendarBlankBoldDuotone';
import { CalendarBlankFill } from './CalendarBlankFill';
import { CalendarBlankFillDuotone } from './CalendarBlankFillDuotone';

export interface CalendarBlankProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarBlank with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarBlankRegular } from 'stera-icons/CalendarBlankRegular';
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

export { CalendarBlank };
