import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockMinusRegular } from './AlarmClockMinusRegular';
import { AlarmClockMinusRegularDuotone } from './AlarmClockMinusRegularDuotone';
import { AlarmClockMinusBold } from './AlarmClockMinusBold';
import { AlarmClockMinusBoldDuotone } from './AlarmClockMinusBoldDuotone';
import { AlarmClockMinusFill } from './AlarmClockMinusFill';
import { AlarmClockMinusFillDuotone } from './AlarmClockMinusFillDuotone';

export interface AlarmClockMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlarmClockMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlarmClockMinusRegular } from 'stera-icons/icons/AlarmClockMinusRegular';
 */
const AlarmClockMinus = memo(forwardRef<SVGSVGElement, AlarmClockMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlarmClockMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlarmClockMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlarmClockMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlarmClockMinusFill ref={ref} {...rest} />;
  if (duotone) return <AlarmClockMinusRegularDuotone ref={ref} {...rest} />;
  return <AlarmClockMinusRegular ref={ref} {...rest} />;
}));

AlarmClockMinus.displayName = 'AlarmClockMinus';

// Triple export pattern (lucide-react style)
export { AlarmClockMinus, AlarmClockMinus as AlarmClockMinusIcon, AlarmClockMinus as SiAlarmClockMinus };
export default AlarmClockMinus;
