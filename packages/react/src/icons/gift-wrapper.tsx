import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GiftIcon as GiftIconRegular } from './gift';
import { GiftIconBold } from './gift-bold';
import { GiftIconFilled } from './gift-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GiftIconProps extends IconProps {
  variant?: IconVariant;
}

const GiftIcon = memo(forwardRef<SVGSVGElement, GiftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GiftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GiftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GiftIconRegular ref={ref} {...props} />;
  }
}));

GiftIcon.displayName = 'GiftIcon';

export { GiftIcon };
