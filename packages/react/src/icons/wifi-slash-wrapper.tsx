import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WifiSlashIcon as WifiSlashIconRegular } from './wifi-slash';
import { WifiSlashIconBold } from './wifi-slash-bold';
import { WifiSlashIconFilled } from './wifi-slash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WifiSlashIconRegular ref={ref} {...props} />;
  }
}));

WifiSlashIcon.displayName = 'WifiSlashIcon';

export { WifiSlashIcon };
