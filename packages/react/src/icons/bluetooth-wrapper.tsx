import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BluetoothIcon as RegularBluetoothIcon } from './bluetooth';
import { BluetoothIconDuotone as BluetoothIconDuotone } from './bluetooth-duotone';
import { BluetoothIconBold as BluetoothIconBold } from './bluetooth-bold';
import { BluetoothIconBoldDuotone as BluetoothIconBoldDuotone } from './bluetooth-bold-duotone';
import { BluetoothIconFill as BluetoothIconFill } from './bluetooth-fill';
import { BluetoothIconFillDuotone as BluetoothIconFillDuotone } from './bluetooth-fill-duotone';

export interface BluetoothIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BluetoothIcon = memo(forwardRef<SVGSVGElement, BluetoothIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BluetoothIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BluetoothIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BluetoothIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BluetoothIconFill ref={ref} {...props} />;
  if (duotone) return <BluetoothIconDuotone ref={ref} {...props} />;
  return <RegularBluetoothIcon ref={ref} {...props} />;
}));

BluetoothIcon.displayName = 'BluetoothIcon';

export { BluetoothIcon };
