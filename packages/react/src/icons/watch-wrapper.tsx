import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WatchIcon as WatchIconRegular } from './watch';
import { WatchIconBold } from './watch-bold';
import { WatchIconFilled } from './watch-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface WatchIconProps extends IconProps {
  variant?: IconVariant;
}

const WatchIcon = memo(forwardRef<SVGSVGElement, WatchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WatchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WatchIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <WatchIconRegular ref={ref} {...props} />;
  }
}));

WatchIcon.displayName = 'WatchIcon';

export { WatchIcon };
