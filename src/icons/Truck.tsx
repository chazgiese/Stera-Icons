import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TruckRegular } from './TruckRegular';
import { TruckRegularDuotone } from './TruckRegularDuotone';
import { TruckBold } from './TruckBold';
import { TruckBoldDuotone } from './TruckBoldDuotone';
import { TruckFill } from './TruckFill';
import { TruckFillDuotone } from './TruckFillDuotone';

export interface TruckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Truck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TruckRegular } from 'stera-icons/icons/TruckRegular';
 */
const Truck = memo(forwardRef<SVGSVGElement, TruckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TruckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TruckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TruckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TruckFill ref={ref} {...rest} />;
  if (duotone) return <TruckRegularDuotone ref={ref} {...rest} />;
  return <TruckRegular ref={ref} {...rest} />;
}));

Truck.displayName = 'Truck';

// Triple export pattern (lucide-react style)
export { Truck, Truck as TruckIcon, Truck as SiTruck };
