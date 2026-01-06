import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinMinusIcon as RegularMapPinMinusIcon } from './map-pin-minus';
import { MapPinMinusIconDuotone as MapPinMinusIconDuotone } from './map-pin-minus-duotone';
import { MapPinMinusIconBold as MapPinMinusIconBold } from './map-pin-minus-bold';
import { MapPinMinusIconBoldDuotone as MapPinMinusIconBoldDuotone } from './map-pin-minus-bold-duotone';
import { MapPinMinusIconFill as MapPinMinusIconFill } from './map-pin-minus-fill';
import { MapPinMinusIconFillDuotone as MapPinMinusIconFillDuotone } from './map-pin-minus-fill-duotone';

export interface MapPinMinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MapPinMinusIcon = memo(forwardRef<SVGSVGElement, MapPinMinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinMinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MapPinMinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MapPinMinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MapPinMinusIconFill ref={ref} {...props} />;
  if (duotone) return <MapPinMinusIconDuotone ref={ref} {...props} />;
  return <RegularMapPinMinusIcon ref={ref} {...props} />;
}));

MapPinMinusIcon.displayName = 'MapPinMinusIcon';

export { MapPinMinusIcon };
