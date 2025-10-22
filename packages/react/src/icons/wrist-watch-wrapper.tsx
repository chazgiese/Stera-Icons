import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WristWatchIcon as WristWatchIconRegular } from './wrist-watch';
import { WristWatchIconBold } from './wrist-watch-bold';
import { WristWatchIconFilled } from './wrist-watch-filled';
import { WristWatchIconFilltone } from './wrist-watch-filltone';
import { WristWatchIconLinetone } from './wrist-watch-linetone';

export interface WristWatchIconProps extends IconProps {
  variant?: IconVariant;
}

const WristWatchIcon = memo(forwardRef<SVGSVGElement, WristWatchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WristWatchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WristWatchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WristWatchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WristWatchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <WristWatchIconRegular ref={ref} {...props} />;
  }
}));

WristWatchIcon.displayName = 'WristWatchIcon';

export { WristWatchIcon };
