import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapRegular } from './MapRegular';
import { MapRegularDuotone } from './MapRegularDuotone';
import { MapBold } from './MapBold';
import { MapBoldDuotone } from './MapBoldDuotone';
import { MapFill } from './MapFill';
import { MapFillDuotone } from './MapFillDuotone';

export interface MapProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Map - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapRegular } from 'stera-icons/MapRegular';
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
