import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MapIcon as RegularMapIcon } from './map';
import { MapIconBold } from './map-bold';
import { MapIconFilled } from './map-filled';
import { MapIconFilltone } from './map-filltone';
import { MapIconLinetone } from './map-linetone';

export interface MapIconProps extends IconProps {
  variant?: IconVariant;
}

const MapIcon = memo(forwardRef<SVGSVGElement, MapIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MapIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MapIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MapIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MapIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMapIcon ref={ref} {...props} />;
  }
}));

MapIcon.displayName = 'MapIcon';

export { MapIcon };
