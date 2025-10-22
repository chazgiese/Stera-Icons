import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BellXIcon as RegularBellXIcon } from './bell-x';
import { BellXIconBold } from './bell-x-bold';
import { BellXIconFilled } from './bell-x-filled';
import { BellXIconFilltone } from './bell-x-filltone';
import { BellXIconLinetone } from './bell-x-linetone';

export interface BellXIconProps extends IconProps {
  variant?: IconVariant;
}

const BellXIcon = memo(forwardRef<SVGSVGElement, BellXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BellXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BellXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BellXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BellXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBellXIcon ref={ref} {...props} />;
  }
}));

BellXIcon.displayName = 'BellXIcon';

export { BellXIcon };
