import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BluetoothIcon as BluetoothIconRegular } from './bluetooth';
import { BluetoothIconBold } from './bluetooth-bold';
import { BluetoothIconFilled } from './bluetooth-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BluetoothIconProps extends IconProps {
  variant?: IconVariant;
}

const BluetoothIcon = memo(forwardRef<SVGSVGElement, BluetoothIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BluetoothIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BluetoothIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BluetoothIconRegular ref={ref} {...props} />;
  }
}));

BluetoothIcon.displayName = 'BluetoothIcon';

export { BluetoothIcon };
