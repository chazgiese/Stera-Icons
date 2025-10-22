import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BasketballIcon as BasketballIconRegular } from './basketball';
import { BasketballIconBold } from './basketball-bold';
import { BasketballIconFilled } from './basketball-filled';
import { BasketballIconFilltone } from './basketball-filltone';
import { BasketballIconLinetone } from './basketball-linetone';

export interface BasketballIconProps extends IconProps {
  variant?: IconVariant;
}

const BasketballIcon = memo(forwardRef<SVGSVGElement, BasketballIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BasketballIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BasketballIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BasketballIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BasketballIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BasketballIconRegular ref={ref} {...props} />;
  }
}));

BasketballIcon.displayName = 'BasketballIcon';

export { BasketballIcon };
