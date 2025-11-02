import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UsersThreeIcon as RegularUsersThreeIcon } from './users-three';
import { UsersThreeIconBold } from './users-three-bold';
import { UsersThreeIconFilled } from './users-three-filled';
import { UsersThreeIconFilltone } from './users-three-filltone';
import { UsersThreeIconLinetone } from './users-three-linetone';

export interface UsersThreeIconProps extends IconProps {
  variant?: IconVariant;
}

const UsersThreeIcon = memo(forwardRef<SVGSVGElement, UsersThreeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UsersThreeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UsersThreeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UsersThreeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UsersThreeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUsersThreeIcon ref={ref} {...props} />;
  }
}));

UsersThreeIcon.displayName = 'UsersThreeIcon';

export { UsersThreeIcon };
