import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserCircleDashedRegular } from './UserCircleDashedRegular';
import { UserCircleDashedRegularDuotone } from './UserCircleDashedRegularDuotone';
import { UserCircleDashedBold } from './UserCircleDashedBold';
import { UserCircleDashedBoldDuotone } from './UserCircleDashedBoldDuotone';
import { UserCircleDashedFill } from './UserCircleDashedFill';
import { UserCircleDashedFillDuotone } from './UserCircleDashedFillDuotone';

export interface UserCircleDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserCircleDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserCircleDashedRegular } from 'stera-icons/icons/UserCircleDashedRegular';
 */
const UserCircleDashed = memo(forwardRef<SVGSVGElement, UserCircleDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserCircleDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserCircleDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserCircleDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserCircleDashedFill ref={ref} {...rest} />;
  if (duotone) return <UserCircleDashedRegularDuotone ref={ref} {...rest} />;
  return <UserCircleDashedRegular ref={ref} {...rest} />;
}));

UserCircleDashed.displayName = 'UserCircleDashed';

// Triple export pattern (lucide-react style)
export { UserCircleDashed, UserCircleDashed as UserCircleDashedIcon, UserCircleDashed as SiUserCircleDashed };
export default UserCircleDashed;
