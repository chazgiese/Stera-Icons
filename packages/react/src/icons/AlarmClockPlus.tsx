import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockPlusRegular } from './AlarmClockPlusRegular';
import { AlarmClockPlusRegularDuotone } from './AlarmClockPlusRegularDuotone';
import { AlarmClockPlusBold } from './AlarmClockPlusBold';
import { AlarmClockPlusBoldDuotone } from './AlarmClockPlusBoldDuotone';
import { AlarmClockPlusFill } from './AlarmClockPlusFill';
import { AlarmClockPlusFillDuotone } from './AlarmClockPlusFillDuotone';

export interface AlarmClockPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlarmClockPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlarmClockPlusRegular } from 'stera-icons/AlarmClockPlusRegular';
 */
const AlarmClockPlus = memo(forwardRef<SVGSVGElement, AlarmClockPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlarmClockPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlarmClockPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlarmClockPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlarmClockPlusFill ref={ref} {...rest} />;
  if (duotone) return <AlarmClockPlusRegularDuotone ref={ref} {...rest} />;
  return <AlarmClockPlusRegular ref={ref} {...rest} />;
}));

AlarmClockPlus.displayName = 'AlarmClockPlus';

// Triple export pattern (lucide-react style)
export { AlarmClockPlus, AlarmClockPlus as AlarmClockPlusIcon, AlarmClockPlus as SiAlarmClockPlus };
