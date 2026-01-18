import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AirplaneRegular } from './AirplaneRegular';
import { AirplaneRegularDuotone } from './AirplaneRegularDuotone';
import { AirplaneBold } from './AirplaneBold';
import { AirplaneBoldDuotone } from './AirplaneBoldDuotone';
import { AirplaneFill } from './AirplaneFill';
import { AirplaneFillDuotone } from './AirplaneFillDuotone';

export interface AirplaneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Airplane - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AirplaneRegular } from 'stera-icons/AirplaneRegular';
 */
const Airplane = memo(forwardRef<SVGSVGElement, AirplaneProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AirplaneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AirplaneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AirplaneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AirplaneFill ref={ref} {...rest} />;
  if (duotone) return <AirplaneRegularDuotone ref={ref} {...rest} />;
  return <AirplaneRegular ref={ref} {...rest} />;
}));

Airplane.displayName = 'Airplane';

// Triple export pattern (lucide-react style)
export { Airplane, Airplane as AirplaneIcon, Airplane as SiAirplane };
