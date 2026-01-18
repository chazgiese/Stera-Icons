import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SunriseRegular } from './SunriseRegular';
import { SunriseRegularDuotone } from './SunriseRegularDuotone';
import { SunriseBold } from './SunriseBold';
import { SunriseBoldDuotone } from './SunriseBoldDuotone';
import { SunriseFill } from './SunriseFill';
import { SunriseFillDuotone } from './SunriseFillDuotone';

export interface SunriseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sunrise with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SunriseRegular } from 'stera-icons/SunriseRegular';
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

export { Sunrise };
