import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BellIcon as BellIconRegular } from './bell';
import { BellIconBold } from './bell-bold';
import { BellIconFilled } from './bell-filled';
import { BellIconFilltone } from './bell-filltone';
import { BellIconLinetone } from './bell-linetone';

export interface BellIconProps extends IconProps {
  variant?: IconVariant;
}

const BellIcon = memo(forwardRef<SVGSVGElement, BellIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BellIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BellIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BellIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BellIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BellIconRegular ref={ref} {...props} />;
  }
}));

BellIcon.displayName = 'BellIcon';

export { BellIcon };
