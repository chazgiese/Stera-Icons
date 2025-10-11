import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BasketIcon as BasketIconRegular } from './basket';
import { BasketIconBold } from './basket-bold';
import { BasketIconFilled } from './basket-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BasketIconRegular ref={ref} {...props} />;
  }
}));

BasketIcon.displayName = 'BasketIcon';

export { BasketIcon };
