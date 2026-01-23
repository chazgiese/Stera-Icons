import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserCircleRegular } from './UserCircleRegular.js';
import { UserCircleRegularDuotone } from './UserCircleRegularDuotone.js';
import { UserCircleBold } from './UserCircleBold.js';
import { UserCircleBoldDuotone } from './UserCircleBoldDuotone.js';
import { UserCircleFill } from './UserCircleFill.js';
import { UserCircleFillDuotone } from './UserCircleFillDuotone.js';

export interface UserCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserCircleRegular } from 'stera-icons/icons/UserCircleRegular';
 */
const UserCircle = memo(forwardRef<SVGSVGElement, UserCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserCircleFill ref={ref} {...rest} />;
  if (duotone) return <UserCircleRegularDuotone ref={ref} {...rest} />;
  return <UserCircleRegular ref={ref} {...rest} />;
}));

UserCircle.displayName = 'UserCircle';

// Triple export pattern (lucide-react style)
export { UserCircle, UserCircle as UserCircleIcon, UserCircle as SiUserCircle };
export default UserCircle;
