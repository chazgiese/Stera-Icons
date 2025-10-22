import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WifiSlashIcon as RegularWifiSlashIcon } from './wifi-slash';
import { WifiSlashIconBold } from './wifi-slash-bold';
import { WifiSlashIconFilled } from './wifi-slash-filled';
import { WifiSlashIconFilltone } from './wifi-slash-filltone';
import { WifiSlashIconLinetone } from './wifi-slash-linetone';

export interface WifiSlashIconProps extends IconProps {
  variant?: IconVariant;
}

const WifiSlashIcon = memo(forwardRef<SVGSVGElement, WifiSlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WifiSlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WifiSlashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WifiSlashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WifiSlashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWifiSlashIcon ref={ref} {...props} />;
  }
}));

WifiSlashIcon.displayName = 'WifiSlashIcon';

export { WifiSlashIcon };
