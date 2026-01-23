import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SunriseRegular } from './SunriseRegular.js';
import { SunriseRegularDuotone } from './SunriseRegularDuotone.js';
import { SunriseBold } from './SunriseBold.js';
import { SunriseBoldDuotone } from './SunriseBoldDuotone.js';
import { SunriseFill } from './SunriseFill.js';
import { SunriseFillDuotone } from './SunriseFillDuotone.js';

export interface SunriseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sunrise - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SunriseRegular } from 'stera-icons/icons/SunriseRegular';
 */
const Sunrise = memo(forwardRef<SVGSVGElement, SunriseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SunriseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SunriseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SunriseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SunriseFill ref={ref} {...rest} />;
  if (duotone) return <SunriseRegularDuotone ref={ref} {...rest} />;
  return <SunriseRegular ref={ref} {...rest} />;
}));

Sunrise.displayName = 'Sunrise';

// Triple export pattern (lucide-react style)
export { Sunrise, Sunrise as SunriseIcon, Sunrise as SiSunrise };
export default Sunrise;
