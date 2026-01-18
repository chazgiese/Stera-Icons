import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinnedRegular } from './MapPinnedRegular';
import { MapPinnedRegularDuotone } from './MapPinnedRegularDuotone';
import { MapPinnedBold } from './MapPinnedBold';
import { MapPinnedBoldDuotone } from './MapPinnedBoldDuotone';
import { MapPinnedFill } from './MapPinnedFill';
import { MapPinnedFillDuotone } from './MapPinnedFillDuotone';

export interface MapPinnedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinned - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinnedRegular } from 'stera-icons/MapPinnedRegular';
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
