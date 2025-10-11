import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WifiIcon as WifiIconRegular } from './wifi';
import { WifiIconBold } from './wifi-bold';
import { WifiIconFilled } from './wifi-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WifiIconRegular ref={ref} {...props} />;
  }
}));

WifiIcon.displayName = 'WifiIcon';

export { WifiIcon };
