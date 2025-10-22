import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WineBottleIcon as RegularWineBottleIcon } from './wine-bottle';
import { WineBottleIconBold } from './wine-bottle-bold';
import { WineBottleIconFilled } from './wine-bottle-filled';
import { WineBottleIconFilltone } from './wine-bottle-filltone';
import { WineBottleIconLinetone } from './wine-bottle-linetone';

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
    case 'filltone':
      return <WineBottleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WineBottleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWineBottleIcon ref={ref} {...props} />;
  }
}));

WineBottleIcon.displayName = 'WineBottleIcon';

export { WineBottleIcon };
