import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserXIcon as RegularUserXIcon } from './user-x';
import { UserXIconDuotone as UserXIconDuotone } from './user-x-duotone';
import { UserXIconBold as UserXIconBold } from './user-x-bold';
import { UserXIconBoldDuotone as UserXIconBoldDuotone } from './user-x-bold-duotone';
import { UserXIconFill as UserXIconFill } from './user-x-fill';
import { UserXIconFillDuotone as UserXIconFillDuotone } from './user-x-fill-duotone';

export interface UserXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserXIcon = memo(forwardRef<SVGSVGElement, UserXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserXIconFill ref={ref} {...props} />;
  if (duotone) return <UserXIconDuotone ref={ref} {...props} />;
  return <RegularUserXIcon ref={ref} {...props} />;
}));

UserXIcon.displayName = 'UserXIcon';

export { UserXIcon };
