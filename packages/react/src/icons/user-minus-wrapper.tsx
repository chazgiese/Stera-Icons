import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserMinusIcon as RegularUserMinusIcon } from './user-minus';
import { UserMinusIconDuotone as UserMinusIconDuotone } from './user-minus-duotone';
import { UserMinusIconBold as UserMinusIconBold } from './user-minus-bold';
import { UserMinusIconBoldDuotone as UserMinusIconBoldDuotone } from './user-minus-bold-duotone';
import { UserMinusIconFill as UserMinusIconFill } from './user-minus-fill';
import { UserMinusIconFillDuotone as UserMinusIconFillDuotone } from './user-minus-fill-duotone';

export interface UserMinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserMinusIcon = memo(forwardRef<SVGSVGElement, UserMinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserMinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserMinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserMinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserMinusIconFill ref={ref} {...props} />;
  if (duotone) return <UserMinusIconDuotone ref={ref} {...props} />;
  return <RegularUserMinusIcon ref={ref} {...props} />;
}));

UserMinusIcon.displayName = 'UserMinusIcon';

export { UserMinusIcon };
