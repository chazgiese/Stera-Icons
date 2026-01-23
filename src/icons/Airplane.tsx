import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AirplaneRegular } from './AirplaneRegular.js';
import { AirplaneRegularDuotone } from './AirplaneRegularDuotone.js';
import { AirplaneBold } from './AirplaneBold.js';
import { AirplaneBoldDuotone } from './AirplaneBoldDuotone.js';
import { AirplaneFill } from './AirplaneFill.js';
import { AirplaneFillDuotone } from './AirplaneFillDuotone.js';

export interface AirplaneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Airplane - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AirplaneRegular } from 'stera-icons/icons/AirplaneRegular';
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
export default Airplane;
