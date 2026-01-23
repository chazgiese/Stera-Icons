import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserXRegular } from './UserXRegular.js';
import { UserXRegularDuotone } from './UserXRegularDuotone.js';
import { UserXBold } from './UserXBold.js';
import { UserXBoldDuotone } from './UserXBoldDuotone.js';
import { UserXFill } from './UserXFill.js';
import { UserXFillDuotone } from './UserXFillDuotone.js';

export interface UserXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserXRegular } from 'stera-icons/icons/UserXRegular';
 */
const UserX = memo(forwardRef<SVGSVGElement, UserXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserXFill ref={ref} {...rest} />;
  if (duotone) return <UserXRegularDuotone ref={ref} {...rest} />;
  return <UserXRegular ref={ref} {...rest} />;
}));

UserX.displayName = 'UserX';

// Triple export pattern (lucide-react style)
export { UserX, UserX as UserXIcon, UserX as SiUserX };
export default UserX;
