import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarOffRegular } from './CalendarOffRegular';
import { CalendarOffRegularDuotone } from './CalendarOffRegularDuotone';
import { CalendarOffBold } from './CalendarOffBold';
import { CalendarOffBoldDuotone } from './CalendarOffBoldDuotone';
import { CalendarOffFill } from './CalendarOffFill';
import { CalendarOffFillDuotone } from './CalendarOffFillDuotone';

export interface CalendarOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CalendarOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalendarOffRegular } from 'stera-icons/icons/CalendarOffRegular';
 */
const CalendarOff = memo(forwardRef<SVGSVGElement, CalendarOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalendarOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalendarOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalendarOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalendarOffFill ref={ref} {...rest} />;
  if (duotone) return <CalendarOffRegularDuotone ref={ref} {...rest} />;
  return <CalendarOffRegular ref={ref} {...rest} />;
}));

CalendarOff.displayName = 'CalendarOff';

// Triple export pattern (lucide-react style)
export { CalendarOff, CalendarOff as CalendarOffIcon, CalendarOff as SiCalendarOff };
