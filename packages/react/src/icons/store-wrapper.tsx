import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { StoreIcon as RegularStoreIcon } from './store';
import { StoreIconBold } from './store-bold';
import { StoreIconFilled } from './store-filled';
import { StoreIconFilltone } from './store-filltone';
import { StoreIconLinetone } from './store-linetone';

export interface StoreIconProps extends IconProps {
  variant?: IconVariant;
}

const StoreIcon = memo(forwardRef<SVGSVGElement, StoreIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <StoreIconFilled ref={ref} {...props} />;
    case 'bold':
      return <StoreIconBold ref={ref} {...props} />;
    case 'filltone':
      return <StoreIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <StoreIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularStoreIcon ref={ref} {...props} />;
  }
}));

StoreIcon.displayName = 'StoreIcon';

export { StoreIcon };
