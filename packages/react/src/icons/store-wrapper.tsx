import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StoreIcon as StoreIconRegular } from './store';
import { StoreIconBold } from './store-bold';
import { StoreIconFilled } from './store-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <StoreIconRegular ref={ref} {...props} />;
  }
}));

StoreIcon.displayName = 'StoreIcon';

export { StoreIcon };
