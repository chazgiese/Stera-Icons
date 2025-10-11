import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BasketballIcon as BasketballIconRegular } from './basketball';
import { BasketballIconBold } from './basketball-bold';
import { BasketballIconFilled } from './basketball-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BasketballIconRegular ref={ref} {...props} />;
  }
}));

BasketballIcon.displayName = 'BasketballIcon';

export { BasketballIcon };
