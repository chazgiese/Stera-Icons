import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WineGlassIcon as RegularWineGlassIcon } from './wine-glass';
import { WineGlassIconBold } from './wine-glass-bold';
import { WineGlassIconFilled } from './wine-glass-filled';
import { WineGlassIconFilltone } from './wine-glass-filltone';
import { WineGlassIconLinetone } from './wine-glass-linetone';

export interface WineGlassIconProps extends IconProps {
  variant?: IconVariant;
}

const WineGlassIcon = memo(forwardRef<SVGSVGElement, WineGlassIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WineGlassIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WineGlassIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WineGlassIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WineGlassIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWineGlassIcon ref={ref} {...props} />;
  }
}));

WineGlassIcon.displayName = 'WineGlassIcon';

export { WineGlassIcon };
