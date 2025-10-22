import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HomePlusIcon as RegularHomePlusIcon } from './home-plus';
import { HomePlusIconBold } from './home-plus-bold';
import { HomePlusIconFilled } from './home-plus-filled';
import { HomePlusIconFilltone } from './home-plus-filltone';
import { HomePlusIconLinetone } from './home-plus-linetone';

export interface HomePlusIconProps extends IconProps {
  variant?: IconVariant;
}

const HomePlusIcon = memo(forwardRef<SVGSVGElement, HomePlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomePlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomePlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HomePlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HomePlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHomePlusIcon ref={ref} {...props} />;
  }
}));

HomePlusIcon.displayName = 'HomePlusIcon';

export { HomePlusIcon };
