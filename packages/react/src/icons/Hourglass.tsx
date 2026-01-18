import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassRegular } from './HourglassRegular';
import { HourglassRegularDuotone } from './HourglassRegularDuotone';
import { HourglassBold } from './HourglassBold';
import { HourglassBoldDuotone } from './HourglassBoldDuotone';
import { HourglassFill } from './HourglassFill';
import { HourglassFillDuotone } from './HourglassFillDuotone';

export interface HourglassProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hourglass - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HourglassRegular } from 'stera-icons/HourglassRegular';
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
