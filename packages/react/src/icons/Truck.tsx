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
 * Truck with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TruckRegular } from 'stera-icons/TruckRegular';
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

export { Truck };
