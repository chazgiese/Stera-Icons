import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinPlusIcon as MapPinPlusIconRegular } from './map-pin-plus';
import { MapPinPlusIconBold } from './map-pin-plus-bold';
import { MapPinPlusIconFilled } from './map-pin-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MapPinPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const MapPinPlusIcon = memo(forwardRef<SVGSVGElement, MapPinPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MapPinPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MapPinPlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MapPinPlusIconRegular ref={ref} {...props} />;
  }
}));

MapPinPlusIcon.displayName = 'MapPinPlusIcon';

export { MapPinPlusIcon };
