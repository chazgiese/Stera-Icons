import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserMinusRegular } from './UserMinusRegular.js';
import { UserMinusRegularDuotone } from './UserMinusRegularDuotone.js';
import { UserMinusBold } from './UserMinusBold.js';
import { UserMinusBoldDuotone } from './UserMinusBoldDuotone.js';
import { UserMinusFill } from './UserMinusFill.js';
import { UserMinusFillDuotone } from './UserMinusFillDuotone.js';

export interface UserMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserMinusRegular } from 'stera-icons/icons/UserMinusRegular';
 */
const UserMinus = memo(forwardRef<SVGSVGElement, UserMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserMinusFill ref={ref} {...rest} />;
  if (duotone) return <UserMinusRegularDuotone ref={ref} {...rest} />;
  return <UserMinusRegular ref={ref} {...rest} />;
}));

UserMinus.displayName = 'UserMinus';

// Triple export pattern (lucide-react style)
export { UserMinus, UserMinus as UserMinusIcon, UserMinus as SiUserMinus };
export default UserMinus;
