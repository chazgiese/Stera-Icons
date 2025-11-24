import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserMinusIcon as RegularUserMinusIcon } from './user-minus';
import { UserMinusIconBold } from './user-minus-bold';
import { UserMinusIconFilled } from './user-minus-filled';
import { UserMinusIconFilltone } from './user-minus-filltone';
import { UserMinusIconLinetone } from './user-minus-linetone';

export interface UserMinusIconProps extends IconProps {
  variant?: IconVariant;
}

const UserMinusIcon = memo(forwardRef<SVGSVGElement, UserMinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserMinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserMinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserMinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserMinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserMinusIcon ref={ref} {...props} />;
  }
}));

UserMinusIcon.displayName = 'UserMinusIcon';

export { UserMinusIcon };
