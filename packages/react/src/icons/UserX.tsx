import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserXRegular } from './UserXRegular';
import { UserXRegularDuotone } from './UserXRegularDuotone';
import { UserXBold } from './UserXBold';
import { UserXBoldDuotone } from './UserXBoldDuotone';
import { UserXFill } from './UserXFill';
import { UserXFillDuotone } from './UserXFillDuotone';

export interface UserXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserX with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { UserXRegular } from 'stera-icons/UserXRegular';
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

export { UserX };
