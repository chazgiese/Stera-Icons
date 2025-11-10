import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Home3dIcon as RegularHome3dIcon } from './home-3d';
import { Home3dIconBold } from './home-3d-bold';
import { Home3dIconFilled } from './home-3d-filled';
import { Home3dIconFilltone } from './home-3d-filltone';
import { Home3dIconLinetone } from './home-3d-linetone';

export interface Home3dIconProps extends IconProps {
  variant?: IconVariant;
}

const Home3dIcon = memo(forwardRef<SVGSVGElement, Home3dIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Home3dIconFilled ref={ref} {...props} />;
    case 'bold':
      return <Home3dIconBold ref={ref} {...props} />;
    case 'filltone':
      return <Home3dIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Home3dIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHome3dIcon ref={ref} {...props} />;
  }
}));

Home3dIcon.displayName = 'Home3dIcon';

export { Home3dIcon };
