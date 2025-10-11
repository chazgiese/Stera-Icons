import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinMinusIcon as MapPinMinusIconRegular } from './map-pin-minus';
import { MapPinMinusIconBold } from './map-pin-minus-bold';
import { MapPinMinusIconFilled } from './map-pin-minus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MapPinMinusIconRegular ref={ref} {...props} />;
  }
}));

MapPinMinusIcon.displayName = 'MapPinMinusIcon';

export { MapPinMinusIcon };
