import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinMinusRegular } from './MapPinMinusRegular';
import { MapPinMinusRegularDuotone } from './MapPinMinusRegularDuotone';
import { MapPinMinusBold } from './MapPinMinusBold';
import { MapPinMinusBoldDuotone } from './MapPinMinusBoldDuotone';
import { MapPinMinusFill } from './MapPinMinusFill';
import { MapPinMinusFillDuotone } from './MapPinMinusFillDuotone';

export interface MapPinMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinMinusRegular } from 'stera-icons/icons/MapPinMinusRegular';
 */
const MapPinMinus = memo(forwardRef<SVGSVGElement, MapPinMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinMinusFill ref={ref} {...rest} />;
  if (duotone) return <MapPinMinusRegularDuotone ref={ref} {...rest} />;
  return <MapPinMinusRegular ref={ref} {...rest} />;
}));

MapPinMinus.displayName = 'MapPinMinus';

// Triple export pattern (lucide-react style)
export { MapPinMinus, MapPinMinus as MapPinMinusIcon, MapPinMinus as SiMapPinMinus };
