import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MapPinRegular } from './MapPinRegular.js';
import { MapPinRegularDuotone } from './MapPinRegularDuotone.js';
import { MapPinBold } from './MapPinBold.js';
import { MapPinBoldDuotone } from './MapPinBoldDuotone.js';
import { MapPinFill } from './MapPinFill.js';
import { MapPinFillDuotone } from './MapPinFillDuotone.js';

export interface MapPinProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPin - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinRegular } from 'stera-icons/icons/MapPinRegular';
 */
const MapPin = memo(forwardRef<SVGSVGElement, MapPinProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinFill ref={ref} {...rest} />;
  if (duotone) return <MapPinRegularDuotone ref={ref} {...rest} />;
  return <MapPinRegular ref={ref} {...rest} />;
}));

MapPin.displayName = 'MapPin';

// Triple export pattern (lucide-react style)
export { MapPin, MapPin as MapPinIcon, MapPin as SiMapPin };
export default MapPin;
