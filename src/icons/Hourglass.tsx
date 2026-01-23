import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HourglassRegular } from './HourglassRegular.js';
import { HourglassRegularDuotone } from './HourglassRegularDuotone.js';
import { HourglassBold } from './HourglassBold.js';
import { HourglassBoldDuotone } from './HourglassBoldDuotone.js';
import { HourglassFill } from './HourglassFill.js';
import { HourglassFillDuotone } from './HourglassFillDuotone.js';

export interface HourglassProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hourglass - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HourglassRegular } from 'stera-icons/icons/HourglassRegular';
 */
const Hourglass = memo(forwardRef<SVGSVGElement, HourglassProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HourglassBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HourglassFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HourglassFill ref={ref} {...rest} />;
  if (duotone) return <HourglassRegularDuotone ref={ref} {...rest} />;
  return <HourglassRegular ref={ref} {...rest} />;
}));

Hourglass.displayName = 'Hourglass';

// Triple export pattern (lucide-react style)
export { Hourglass, Hourglass as HourglassIcon, Hourglass as SiHourglass };
export default Hourglass;
