import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BasketIcon as RegularBasketIcon } from './basket';
import { BasketIconBold } from './basket-bold';
import { BasketIconFilled } from './basket-filled';
import { BasketIconFilltone } from './basket-filltone';
import { BasketIconLinetone } from './basket-linetone';

export interface BasketIconProps extends IconProps {
  variant?: IconVariant;
}

const BasketIcon = memo(forwardRef<SVGSVGElement, BasketIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BasketIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BasketIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BasketIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BasketIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBasketIcon ref={ref} {...props} />;
  }
}));

BasketIcon.displayName = 'BasketIcon';

export { BasketIcon };
