import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GiftBoxIcon as RegularGiftBoxIcon } from './gift-box';
import { GiftBoxIconBold } from './gift-box-bold';
import { GiftBoxIconFilled } from './gift-box-filled';
import { GiftBoxIconFilltone } from './gift-box-filltone';
import { GiftBoxIconLinetone } from './gift-box-linetone';

export interface GiftBoxIconProps extends IconProps {
  variant?: IconVariant;
}

const GiftBoxIcon = memo(forwardRef<SVGSVGElement, GiftBoxIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GiftBoxIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GiftBoxIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GiftBoxIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GiftBoxIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGiftBoxIcon ref={ref} {...props} />;
  }
}));

GiftBoxIcon.displayName = 'GiftBoxIcon';

export { GiftBoxIcon };
