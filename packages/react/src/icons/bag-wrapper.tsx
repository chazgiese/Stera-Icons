import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BagIcon as BagIconRegular } from './bag';
import { BagIconBold } from './bag-bold';
import { BagIconFilled } from './bag-filled';
import { BagIconFilltone } from './bag-filltone';
import { BagIconLinetone } from './bag-linetone';

export interface BagIconProps extends IconProps {
  variant?: IconVariant;
}

const BagIcon = memo(forwardRef<SVGSVGElement, BagIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BagIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BagIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BagIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BagIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BagIconRegular ref={ref} {...props} />;
  }
}));

BagIcon.displayName = 'BagIcon';

export { BagIcon };
