import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockRegular } from './AlarmClockRegular';
import { AlarmClockRegularDuotone } from './AlarmClockRegularDuotone';
import { AlarmClockBold } from './AlarmClockBold';
import { AlarmClockBoldDuotone } from './AlarmClockBoldDuotone';
import { AlarmClockFill } from './AlarmClockFill';
import { AlarmClockFillDuotone } from './AlarmClockFillDuotone';

export interface AlarmClockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlarmClock with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AlarmClockRegular } from 'stera-icons/AlarmClockRegular';
 */
const AlarmClock = memo(forwardRef<SVGSVGElement, AlarmClockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlarmClockBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlarmClockBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlarmClockFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlarmClockFill ref={ref} {...rest} />;
  if (duotone) return <AlarmClockRegularDuotone ref={ref} {...rest} />;
  return <AlarmClockRegular ref={ref} {...rest} />;
}));

AlarmClock.displayName = 'AlarmClock';

export { AlarmClock };
