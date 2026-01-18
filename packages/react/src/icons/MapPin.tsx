import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MapPinRegular } from './MapPinRegular';
import { MapPinRegularDuotone } from './MapPinRegularDuotone';
import { MapPinBold } from './MapPinBold';
import { MapPinBoldDuotone } from './MapPinBoldDuotone';
import { MapPinFill } from './MapPinFill';
import { MapPinFillDuotone } from './MapPinFillDuotone';

export interface MapPinProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPin with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinRegular } from 'stera-icons/MapPinRegular';
 */
const MapPin = memo(forwardRef<SVGSVGElement, MapPinProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinFill ref={ref} {...rest} />;
  if (duotone) return <MapPinRegularDuotone ref={ref} {...rest} />;
  return <MapPinRegular ref={ref} {...rest} />;
}));

MapPin.displayName = 'MapPin';

export { MapPin };
