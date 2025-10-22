import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GiftIcon as GiftIconRegular } from './gift';
import { GiftIconBold } from './gift-bold';
import { GiftIconFilled } from './gift-filled';
import { GiftIconFilltone } from './gift-filltone';
import { GiftIconLinetone } from './gift-linetone';

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
    case 'filltone':
      return <GiftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GiftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <GiftIconRegular ref={ref} {...props} />;
  }
}));

GiftIcon.displayName = 'GiftIcon';

export { GiftIcon };
