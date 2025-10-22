import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WifiIcon as RegularWifiIcon } from './wifi';
import { WifiIconBold } from './wifi-bold';
import { WifiIconFilled } from './wifi-filled';
import { WifiIconFilltone } from './wifi-filltone';
import { WifiIconLinetone } from './wifi-linetone';

export interface WifiIconProps extends IconProps {
  variant?: IconVariant;
}

const WifiIcon = memo(forwardRef<SVGSVGElement, WifiIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WifiIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WifiIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WifiIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WifiIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWifiIcon ref={ref} {...props} />;
  }
}));

WifiIcon.displayName = 'WifiIcon';

export { WifiIcon };
