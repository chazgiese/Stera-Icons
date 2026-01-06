import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinPlusIcon as RegularMapPinPlusIcon } from './map-pin-plus';
import { MapPinPlusIconDuotone as MapPinPlusIconDuotone } from './map-pin-plus-duotone';
import { MapPinPlusIconBold as MapPinPlusIconBold } from './map-pin-plus-bold';
import { MapPinPlusIconBoldDuotone as MapPinPlusIconBoldDuotone } from './map-pin-plus-bold-duotone';
import { MapPinPlusIconFill as MapPinPlusIconFill } from './map-pin-plus-fill';
import { MapPinPlusIconFillDuotone as MapPinPlusIconFillDuotone } from './map-pin-plus-fill-duotone';

export interface MapPinPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MapPinPlusIcon = memo(forwardRef<SVGSVGElement, MapPinPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MapPinPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MapPinPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MapPinPlusIconFill ref={ref} {...props} />;
  if (duotone) return <MapPinPlusIconDuotone ref={ref} {...props} />;
  return <RegularMapPinPlusIcon ref={ref} {...props} />;
}));

MapPinPlusIcon.displayName = 'MapPinPlusIcon';

export { MapPinPlusIcon };
