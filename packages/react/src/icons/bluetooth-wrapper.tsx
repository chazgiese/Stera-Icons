import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BluetoothIcon as BluetoothIconRegular } from './bluetooth';
import { BluetoothIconBold } from './bluetooth-bold';
import { BluetoothIconFilled } from './bluetooth-filled';
import { BluetoothIconFilltone } from './bluetooth-filltone';
import { BluetoothIconLinetone } from './bluetooth-linetone';

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
    case 'filltone':
      return <BluetoothIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BluetoothIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BluetoothIconRegular ref={ref} {...props} />;
  }
}));

BluetoothIcon.displayName = 'BluetoothIcon';

export { BluetoothIcon };
