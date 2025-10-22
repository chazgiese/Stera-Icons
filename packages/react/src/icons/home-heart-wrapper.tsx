import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HomeHeartIcon as RegularHomeHeartIcon } from './home-heart';
import { HomeHeartIconBold } from './home-heart-bold';
import { HomeHeartIconFilled } from './home-heart-filled';
import { HomeHeartIconFilltone } from './home-heart-filltone';
import { HomeHeartIconLinetone } from './home-heart-linetone';

export interface HomeHeartIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeHeartIcon = memo(forwardRef<SVGSVGElement, HomeHeartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeHeartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeHeartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HomeHeartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HomeHeartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHomeHeartIcon ref={ref} {...props} />;
  }
}));

HomeHeartIcon.displayName = 'HomeHeartIcon';

export { HomeHeartIcon };
