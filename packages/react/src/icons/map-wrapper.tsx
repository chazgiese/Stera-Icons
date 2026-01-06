import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapIcon as RegularMapIcon } from './map';
import { MapIconDuotone as MapIconDuotone } from './map-duotone';
import { MapIconBold as MapIconBold } from './map-bold';
import { MapIconBoldDuotone as MapIconBoldDuotone } from './map-bold-duotone';
import { MapIconFill as MapIconFill } from './map-fill';
import { MapIconFillDuotone as MapIconFillDuotone } from './map-fill-duotone';

export interface MapIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MapIcon = memo(forwardRef<SVGSVGElement, MapIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MapIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MapIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MapIconFill ref={ref} {...props} />;
  if (duotone) return <MapIconDuotone ref={ref} {...props} />;
  return <RegularMapIcon ref={ref} {...props} />;
}));

MapIcon.displayName = 'MapIcon';

export { MapIcon };
