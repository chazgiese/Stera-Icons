import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserRegular } from './UserRegular';
import { UserRegularDuotone } from './UserRegularDuotone';
import { UserBold } from './UserBold';
import { UserBoldDuotone } from './UserBoldDuotone';
import { UserFill } from './UserFill';
import { UserFillDuotone } from './UserFillDuotone';

export interface UserProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * User with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { UserRegular } from 'stera-icons/UserRegular';
 */
const User = memo(forwardRef<SVGSVGElement, UserProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserFill ref={ref} {...rest} />;
  if (duotone) return <UserRegularDuotone ref={ref} {...rest} />;
  return <UserRegular ref={ref} {...rest} />;
}));

User.displayName = 'User';

export { User };
