import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MapPinMinusIcon as MapPinMinusIconRegular } from './map-pin-minus';
import { MapPinMinusIconBold } from './map-pin-minus-bold';
import { MapPinMinusIconFilled } from './map-pin-minus-filled';
import { MapPinMinusIconFilltone } from './map-pin-minus-filltone';
import { MapPinMinusIconLinetone } from './map-pin-minus-linetone';

export interface MapPinMinusIconProps extends IconProps {
  variant?: IconVariant;
}

const MapPinMinusIcon = memo(forwardRef<SVGSVGElement, MapPinMinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MapPinMinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MapPinMinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MapPinMinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MapPinMinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MapPinMinusIconRegular ref={ref} {...props} />;
  }
}));

MapPinMinusIcon.displayName = 'MapPinMinusIcon';

export { MapPinMinusIcon };
