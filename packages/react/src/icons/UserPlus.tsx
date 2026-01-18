import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserPlusRegular } from './UserPlusRegular';
import { UserPlusRegularDuotone } from './UserPlusRegularDuotone';
import { UserPlusBold } from './UserPlusBold';
import { UserPlusBoldDuotone } from './UserPlusBoldDuotone';
import { UserPlusFill } from './UserPlusFill';
import { UserPlusFillDuotone } from './UserPlusFillDuotone';

export interface UserPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserPlusRegular } from 'stera-icons/UserPlusRegular';
 */
const UserPlus = memo(forwardRef<SVGSVGElement, UserPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserPlusFill ref={ref} {...rest} />;
  if (duotone) return <UserPlusRegularDuotone ref={ref} {...rest} />;
  return <UserPlusRegular ref={ref} {...rest} />;
}));

UserPlus.displayName = 'UserPlus';

// Triple export pattern (lucide-react style)
export { UserPlus, UserPlus as UserPlusIcon, UserPlus as SiUserPlus };
