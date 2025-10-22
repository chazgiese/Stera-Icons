import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HomeIcon as HomeIconRegular } from './home';
import { HomeIconBold } from './home-bold';
import { HomeIconFilled } from './home-filled';
import { HomeIconFilltone } from './home-filltone';
import { HomeIconLinetone } from './home-linetone';

export interface HomeIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeIcon = memo(forwardRef<SVGSVGElement, HomeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HomeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HomeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <HomeIconRegular ref={ref} {...props} />;
  }
}));

HomeIcon.displayName = 'HomeIcon';

export { HomeIcon };
