import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HandbagIcon as RegularHandbagIcon } from './handbag';
import { HandbagIconBold } from './handbag-bold';
import { HandbagIconFilled } from './handbag-filled';
import { HandbagIconFilltone } from './handbag-filltone';
import { HandbagIconLinetone } from './handbag-linetone';

export interface HandbagIconProps extends IconProps {
  variant?: IconVariant;
}

const HandbagIcon = memo(forwardRef<SVGSVGElement, HandbagIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HandbagIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HandbagIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HandbagIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HandbagIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHandbagIcon ref={ref} {...props} />;
  }
}));

HandbagIcon.displayName = 'HandbagIcon';

export { HandbagIcon };
