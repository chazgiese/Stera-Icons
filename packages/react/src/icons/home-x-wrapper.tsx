import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HomeXIcon as RegularHomeXIcon } from './home-x';
import { HomeXIconBold } from './home-x-bold';
import { HomeXIconFilled } from './home-x-filled';
import { HomeXIconFilltone } from './home-x-filltone';
import { HomeXIconLinetone } from './home-x-linetone';

export interface HomeXIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeXIcon = memo(forwardRef<SVGSVGElement, HomeXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HomeXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HomeXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHomeXIcon ref={ref} {...props} />;
  }
}));

HomeXIcon.displayName = 'HomeXIcon';

export { HomeXIcon };
