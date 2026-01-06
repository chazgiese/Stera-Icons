import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinnedIcon as RegularMapPinnedIcon } from './map-pinned';
import { MapPinnedIconDuotone as MapPinnedIconDuotone } from './map-pinned-duotone';
import { MapPinnedIconBold as MapPinnedIconBold } from './map-pinned-bold';
import { MapPinnedIconBoldDuotone as MapPinnedIconBoldDuotone } from './map-pinned-bold-duotone';
import { MapPinnedIconFill as MapPinnedIconFill } from './map-pinned-fill';
import { MapPinnedIconFillDuotone as MapPinnedIconFillDuotone } from './map-pinned-fill-duotone';

export interface MapPinnedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MapPinnedIcon = memo(forwardRef<SVGSVGElement, MapPinnedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinnedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MapPinnedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MapPinnedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MapPinnedIconFill ref={ref} {...props} />;
  if (duotone) return <MapPinnedIconDuotone ref={ref} {...props} />;
  return <RegularMapPinnedIcon ref={ref} {...props} />;
}));

MapPinnedIcon.displayName = 'MapPinnedIcon';

export { MapPinnedIcon };
