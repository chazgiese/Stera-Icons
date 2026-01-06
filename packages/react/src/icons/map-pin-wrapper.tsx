import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinIcon as RegularMapPinIcon } from './map-pin';
import { MapPinIconDuotone as MapPinIconDuotone } from './map-pin-duotone';
import { MapPinIconBold as MapPinIconBold } from './map-pin-bold';
import { MapPinIconBoldDuotone as MapPinIconBoldDuotone } from './map-pin-bold-duotone';
import { MapPinIconFill as MapPinIconFill } from './map-pin-fill';
import { MapPinIconFillDuotone as MapPinIconFillDuotone } from './map-pin-fill-duotone';

export interface MapPinIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MapPinIcon = memo(forwardRef<SVGSVGElement, MapPinIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MapPinIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MapPinIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MapPinIconFill ref={ref} {...props} />;
  if (duotone) return <MapPinIconDuotone ref={ref} {...props} />;
  return <RegularMapPinIcon ref={ref} {...props} />;
}));

MapPinIcon.displayName = 'MapPinIcon';

export { MapPinIcon };
