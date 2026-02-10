import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AlarmClockRegular } from './AlarmClockRegular.js';
import { AlarmClockRegularDuotone } from './AlarmClockRegularDuotone.js';
import { AlarmClockBold } from './AlarmClockBold.js';
import { AlarmClockBoldDuotone } from './AlarmClockBoldDuotone.js';
import { AlarmClockFill } from './AlarmClockFill.js';
import { AlarmClockFillDuotone } from './AlarmClockFillDuotone.js';

export interface AlarmClockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlarmClock - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlarmClockRegular } from 'stera-icons/icons/AlarmClockRegular';
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

// Triple export pattern (lucide-react style)
export { AlarmClock, AlarmClock as AlarmClockIcon, AlarmClock as SiAlarmClock };
export default AlarmClock;
