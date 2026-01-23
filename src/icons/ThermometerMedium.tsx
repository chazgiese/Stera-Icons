import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ThermometerMediumRegular } from './ThermometerMediumRegular.js';
import { ThermometerMediumRegularDuotone } from './ThermometerMediumRegularDuotone.js';
import { ThermometerMediumBold } from './ThermometerMediumBold.js';
import { ThermometerMediumBoldDuotone } from './ThermometerMediumBoldDuotone.js';
import { ThermometerMediumFill } from './ThermometerMediumFill.js';
import { ThermometerMediumFillDuotone } from './ThermometerMediumFillDuotone.js';

export interface ThermometerMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThermometerMedium - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ThermometerMediumRegular } from 'stera-icons/icons/ThermometerMediumRegular';
 */
const ThermometerMedium = memo(forwardRef<SVGSVGElement, ThermometerMediumProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThermometerMediumBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ThermometerMediumBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ThermometerMediumFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ThermometerMediumFill ref={ref} {...rest} />;
  if (duotone) return <ThermometerMediumRegularDuotone ref={ref} {...rest} />;
  return <ThermometerMediumRegular ref={ref} {...rest} />;
}));

ThermometerMedium.displayName = 'ThermometerMedium';

// Triple export pattern (lucide-react style)
export { ThermometerMedium, ThermometerMedium as ThermometerMediumIcon, ThermometerMedium as SiThermometerMedium };
export default ThermometerMedium;
