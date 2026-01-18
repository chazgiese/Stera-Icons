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
 * CalendarFold with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarFoldRegular } from 'stera-icons/CalendarFoldRegular';
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

export { CalendarFold };
