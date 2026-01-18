import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BluetoothRegular } from './BluetoothRegular';
import { BluetoothRegularDuotone } from './BluetoothRegularDuotone';
import { BluetoothBold } from './BluetoothBold';
import { BluetoothBoldDuotone } from './BluetoothBoldDuotone';
import { BluetoothFill } from './BluetoothFill';
import { BluetoothFillDuotone } from './BluetoothFillDuotone';

export interface BluetoothProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bluetooth with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BluetoothRegular } from 'stera-icons/BluetoothRegular';
 */
const Bluetooth = memo(forwardRef<SVGSVGElement, BluetoothProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BluetoothBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BluetoothBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BluetoothFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BluetoothFill ref={ref} {...rest} />;
  if (duotone) return <BluetoothRegularDuotone ref={ref} {...rest} />;
  return <BluetoothRegular ref={ref} {...rest} />;
}));

Bluetooth.displayName = 'Bluetooth';

export { Bluetooth };
