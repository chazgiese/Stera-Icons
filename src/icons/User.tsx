import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserRegular } from './UserRegular.js';
import { UserRegularDuotone } from './UserRegularDuotone.js';
import { UserBold } from './UserBold.js';
import { UserBoldDuotone } from './UserBoldDuotone.js';
import { UserFill } from './UserFill.js';
import { UserFillDuotone } from './UserFillDuotone.js';

export interface UserProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * User - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserRegular } from 'stera-icons/icons/UserRegular';
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

// Triple export pattern (lucide-react style)
export { User, User as UserIcon, User as SiUser };
export default User;
