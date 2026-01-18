import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserBanRegular } from './UserBanRegular';
import { UserBanRegularDuotone } from './UserBanRegularDuotone';
import { UserBanBold } from './UserBanBold';
import { UserBanBoldDuotone } from './UserBanBoldDuotone';
import { UserBanFill } from './UserBanFill';
import { UserBanFillDuotone } from './UserBanFillDuotone';

export interface UserBanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserBan - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserBanRegular } from 'stera-icons/UserBanRegular';
 */
const UserBan = memo(forwardRef<SVGSVGElement, UserBanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserBanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserBanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserBanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserBanFill ref={ref} {...rest} />;
  if (duotone) return <UserBanRegularDuotone ref={ref} {...rest} />;
  return <UserBanRegular ref={ref} {...rest} />;
}));

UserBan.displayName = 'UserBan';

// Triple export pattern (lucide-react style)
export { UserBan, UserBan as UserBanIcon, UserBan as SiUserBan };
