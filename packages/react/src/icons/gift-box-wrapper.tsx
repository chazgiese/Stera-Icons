import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GiftBoxIcon as GiftBoxIconRegular } from './gift-box';
import { GiftBoxIconBold } from './gift-box-bold';
import { GiftBoxIconFilled } from './gift-box-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <GiftBoxIconRegular ref={ref} {...props} />;
  }
}));

GiftBoxIcon.displayName = 'GiftBoxIcon';

export { GiftBoxIcon };
