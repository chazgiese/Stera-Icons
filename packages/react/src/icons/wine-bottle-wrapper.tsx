import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineBottleIcon as WineBottleIconRegular } from './wine-bottle';
import { WineBottleIconBold } from './wine-bottle-bold';
import { WineBottleIconFilled } from './wine-bottle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface WineBottleIconProps extends IconProps {
  variant?: IconVariant;
}

const WineBottleIcon = memo(forwardRef<SVGSVGElement, WineBottleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WineBottleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WineBottleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <WineBottleIconRegular ref={ref} {...props} />;
  }
}));

WineBottleIcon.displayName = 'WineBottleIcon';

export { WineBottleIcon };
