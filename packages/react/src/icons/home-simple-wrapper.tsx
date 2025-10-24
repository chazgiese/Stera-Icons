import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HomeSimpleIcon as RegularHomeSimpleIcon } from './home-simple';
import { HomeSimpleIconBold } from './home-simple-bold';
import { HomeSimpleIconFilled } from './home-simple-filled';
import { HomeSimpleIconFilltone } from './home-simple-filltone';
import { HomeSimpleIconLinetone } from './home-simple-linetone';

export interface HomeSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeSimpleIcon = memo(forwardRef<SVGSVGElement, HomeSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HomeSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HomeSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHomeSimpleIcon ref={ref} {...props} />;
  }
}));

HomeSimpleIcon.displayName = 'HomeSimpleIcon';

export { HomeSimpleIcon };
