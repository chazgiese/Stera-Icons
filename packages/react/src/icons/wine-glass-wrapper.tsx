import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineGlassIcon as WineGlassIconRegular } from './wine-glass';
import { WineGlassIconBold } from './wine-glass-bold';
import { WineGlassIconFilled } from './wine-glass-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WineGlassIconRegular ref={ref} {...props} />;
  }
}));

WineGlassIcon.displayName = 'WineGlassIcon';

export { WineGlassIcon };
