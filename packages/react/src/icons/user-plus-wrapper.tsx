import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserPlusIcon as RegularUserPlusIcon } from './user-plus';
import { UserPlusIconDuotone as UserPlusIconDuotone } from './user-plus-duotone';
import { UserPlusIconBold as UserPlusIconBold } from './user-plus-bold';
import { UserPlusIconBoldDuotone as UserPlusIconBoldDuotone } from './user-plus-bold-duotone';
import { UserPlusIconFill as UserPlusIconFill } from './user-plus-fill';
import { UserPlusIconFillDuotone as UserPlusIconFillDuotone } from './user-plus-fill-duotone';

export interface UserPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserPlusIcon = memo(forwardRef<SVGSVGElement, UserPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserPlusIconFill ref={ref} {...props} />;
  if (duotone) return <UserPlusIconDuotone ref={ref} {...props} />;
  return <RegularUserPlusIcon ref={ref} {...props} />;
}));

UserPlusIcon.displayName = 'UserPlusIcon';

export { UserPlusIcon };
