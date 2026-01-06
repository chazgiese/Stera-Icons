import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserCircleDashedIcon as RegularUserCircleDashedIcon } from './user-circle-dashed';
import { UserCircleDashedIconDuotone as UserCircleDashedIconDuotone } from './user-circle-dashed-duotone';
import { UserCircleDashedIconBold as UserCircleDashedIconBold } from './user-circle-dashed-bold';
import { UserCircleDashedIconBoldDuotone as UserCircleDashedIconBoldDuotone } from './user-circle-dashed-bold-duotone';
import { UserCircleDashedIconFill as UserCircleDashedIconFill } from './user-circle-dashed-fill';
import { UserCircleDashedIconFillDuotone as UserCircleDashedIconFillDuotone } from './user-circle-dashed-fill-duotone';

export interface UserCircleDashedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserCircleDashedIcon = memo(forwardRef<SVGSVGElement, UserCircleDashedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserCircleDashedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserCircleDashedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserCircleDashedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserCircleDashedIconFill ref={ref} {...props} />;
  if (duotone) return <UserCircleDashedIconDuotone ref={ref} {...props} />;
  return <RegularUserCircleDashedIcon ref={ref} {...props} />;
}));

UserCircleDashedIcon.displayName = 'UserCircleDashedIcon';

export { UserCircleDashedIcon };
