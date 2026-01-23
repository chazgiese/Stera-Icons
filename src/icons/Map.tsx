import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MapRegular } from './MapRegular.js';
import { MapRegularDuotone } from './MapRegularDuotone.js';
import { MapBold } from './MapBold.js';
import { MapBoldDuotone } from './MapBoldDuotone.js';
import { MapFill } from './MapFill.js';
import { MapFillDuotone } from './MapFillDuotone.js';

export interface MapProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Map - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapRegular } from 'stera-icons/icons/MapRegular';
 */
const Map = memo(forwardRef<SVGSVGElement, MapProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapFill ref={ref} {...rest} />;
  if (duotone) return <MapRegularDuotone ref={ref} {...rest} />;
  return <MapRegular ref={ref} {...rest} />;
}));

Map.displayName = 'Map';

// Triple export pattern (lucide-react style)
export { Map, Map as MapIcon, Map as SiMap };
export default Map;
