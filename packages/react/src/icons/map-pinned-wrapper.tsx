import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MapPinnedIcon as RegularMapPinnedIcon } from './map-pinned';
import { MapPinnedIconBold } from './map-pinned-bold';
import { MapPinnedIconFilled } from './map-pinned-filled';
import { MapPinnedIconFilltone } from './map-pinned-filltone';
import { MapPinnedIconLinetone } from './map-pinned-linetone';

export interface MapPinnedIconProps extends IconProps {
  variant?: IconVariant;
}

const MapPinnedIcon = memo(forwardRef<SVGSVGElement, MapPinnedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MapPinnedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MapPinnedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MapPinnedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MapPinnedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMapPinnedIcon ref={ref} {...props} />;
  }
}));

MapPinnedIcon.displayName = 'MapPinnedIcon';

export { MapPinnedIcon };
