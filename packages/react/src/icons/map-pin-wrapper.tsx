import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinIcon as MapPinIconRegular } from './map-pin';
import { MapPinIconBold } from './map-pin-bold';
import { MapPinIconFilled } from './map-pin-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MapPinIconRegular ref={ref} {...props} />;
  }
}));

MapPinIcon.displayName = 'MapPinIcon';

export { MapPinIcon };
