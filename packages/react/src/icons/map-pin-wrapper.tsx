import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MapPinIcon as RegularMapPinIcon } from './map-pin';
import { MapPinIconBold } from './map-pin-bold';
import { MapPinIconFilled } from './map-pin-filled';
import { MapPinIconFilltone } from './map-pin-filltone';
import { MapPinIconLinetone } from './map-pin-linetone';

export interface MapPinIconProps extends IconProps {
  variant?: IconVariant;
}

const MapPinIcon = memo(forwardRef<SVGSVGElement, MapPinIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MapPinIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MapPinIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MapPinIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MapPinIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMapPinIcon ref={ref} {...props} />;
  }
}));

MapPinIcon.displayName = 'MapPinIcon';

export { MapPinIcon };
