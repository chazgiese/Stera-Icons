import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserIcon as RegularUserIcon } from './user';
import { UserIconDuotone as UserIconDuotone } from './user-duotone';
import { UserIconBold as UserIconBold } from './user-bold';
import { UserIconBoldDuotone as UserIconBoldDuotone } from './user-bold-duotone';
import { UserIconFill as UserIconFill } from './user-fill';
import { UserIconFillDuotone as UserIconFillDuotone } from './user-fill-duotone';

export interface UserIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserIcon = memo(forwardRef<SVGSVGElement, UserIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserIconFill ref={ref} {...props} />;
  if (duotone) return <UserIconDuotone ref={ref} {...props} />;
  return <RegularUserIcon ref={ref} {...props} />;
}));

UserIcon.displayName = 'UserIcon';

export { UserIcon };
