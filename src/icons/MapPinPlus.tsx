import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinPlusRegular } from './MapPinPlusRegular';
import { MapPinPlusRegularDuotone } from './MapPinPlusRegularDuotone';
import { MapPinPlusBold } from './MapPinPlusBold';
import { MapPinPlusBoldDuotone } from './MapPinPlusBoldDuotone';
import { MapPinPlusFill } from './MapPinPlusFill';
import { MapPinPlusFillDuotone } from './MapPinPlusFillDuotone';

export interface MapPinPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinPlusRegular } from 'stera-icons/icons/MapPinPlusRegular';
 */
const MapPinPlus = memo(forwardRef<SVGSVGElement, MapPinPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinPlusFill ref={ref} {...rest} />;
  if (duotone) return <MapPinPlusRegularDuotone ref={ref} {...rest} />;
  return <MapPinPlusRegular ref={ref} {...rest} />;
}));

MapPinPlus.displayName = 'MapPinPlus';

// Triple export pattern (lucide-react style)
export { MapPinPlus, MapPinPlus as MapPinPlusIcon, MapPinPlus as SiMapPinPlus };
export default MapPinPlus;
