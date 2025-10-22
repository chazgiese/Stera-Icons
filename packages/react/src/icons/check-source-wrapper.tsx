import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CheckSourceIcon as RegularCheckSourceIcon } from './check-source';
import { CheckSourceIconBold } from './check-source-bold';
import { CheckSourceIconFilled } from './check-source-filled';
import { CheckSourceIconFilltone } from './check-source-filltone';
import { CheckSourceIconLinetone } from './check-source-linetone';

export interface CheckSourceIconProps extends IconProps {
  variant?: IconVariant;
}

const CheckSourceIcon = memo(forwardRef<SVGSVGElement, CheckSourceIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CheckSourceIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CheckSourceIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CheckSourceIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CheckSourceIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCheckSourceIcon ref={ref} {...props} />;
  }
}));

CheckSourceIcon.displayName = 'CheckSourceIcon';

export { CheckSourceIcon };
