import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UsersRegular } from './UsersRegular';
import { UsersRegularDuotone } from './UsersRegularDuotone';
import { UsersBold } from './UsersBold';
import { UsersBoldDuotone } from './UsersBoldDuotone';
import { UsersFill } from './UsersFill';
import { UsersFillDuotone } from './UsersFillDuotone';

export interface UsersProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Users - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UsersRegular } from 'stera-icons/icons/UsersRegular';
 */
const Users = memo(forwardRef<SVGSVGElement, UsersProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UsersBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UsersBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UsersFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UsersFill ref={ref} {...rest} />;
  if (duotone) return <UsersRegularDuotone ref={ref} {...rest} />;
  return <UsersRegular ref={ref} {...rest} />;
}));

Users.displayName = 'Users';

// Triple export pattern (lucide-react style)
export { Users, Users as UsersIcon, Users as SiUsers };
export default Users;
