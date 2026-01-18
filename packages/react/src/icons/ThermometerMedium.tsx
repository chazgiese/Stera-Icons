import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerMediumRegular } from './ThermometerMediumRegular';
import { ThermometerMediumRegularDuotone } from './ThermometerMediumRegularDuotone';
import { ThermometerMediumBold } from './ThermometerMediumBold';
import { ThermometerMediumBoldDuotone } from './ThermometerMediumBoldDuotone';
import { ThermometerMediumFill } from './ThermometerMediumFill';
import { ThermometerMediumFillDuotone } from './ThermometerMediumFillDuotone';

export interface ThermometerMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThermometerMedium with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ThermometerMediumRegular } from 'stera-icons/ThermometerMediumRegular';
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

export { ThermometerMedium };
