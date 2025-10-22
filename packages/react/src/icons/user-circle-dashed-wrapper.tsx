import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserCircleDashedIcon as UserCircleDashedIconRegular } from './user-circle-dashed';
import { UserCircleDashedIconBold } from './user-circle-dashed-bold';
import { UserCircleDashedIconFilled } from './user-circle-dashed-filled';
import { UserCircleDashedIconFilltone } from './user-circle-dashed-filltone';
import { UserCircleDashedIconLinetone } from './user-circle-dashed-linetone';

export interface UserCircleDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const UserCircleDashedIcon = memo(forwardRef<SVGSVGElement, UserCircleDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserCircleDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserCircleDashedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserCircleDashedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserCircleDashedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <UserCircleDashedIconRegular ref={ref} {...props} />;
  }
}));

UserCircleDashedIcon.displayName = 'UserCircleDashedIcon';

export { UserCircleDashedIcon };
