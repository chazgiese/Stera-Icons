import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MapPinnedRegular } from './MapPinnedRegular.js';
import { MapPinnedRegularDuotone } from './MapPinnedRegularDuotone.js';
import { MapPinnedBold } from './MapPinnedBold.js';
import { MapPinnedBoldDuotone } from './MapPinnedBoldDuotone.js';
import { MapPinnedFill } from './MapPinnedFill.js';
import { MapPinnedFillDuotone } from './MapPinnedFillDuotone.js';

export interface MapPinnedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinned - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinnedRegular } from 'stera-icons/icons/MapPinnedRegular';
 */
const MapPinned = memo(forwardRef<SVGSVGElement, MapPinnedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinnedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinnedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinnedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinnedFill ref={ref} {...rest} />;
  if (duotone) return <MapPinnedRegularDuotone ref={ref} {...rest} />;
  return <MapPinnedRegular ref={ref} {...rest} />;
}));

MapPinned.displayName = 'MapPinned';

// Triple export pattern (lucide-react style)
export { MapPinned, MapPinned as MapPinnedIcon, MapPinned as SiMapPinned };
export default MapPinned;
