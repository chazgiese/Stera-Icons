import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserCircleRegular } from './UserCircleRegular';
import { UserCircleRegularDuotone } from './UserCircleRegularDuotone';
import { UserCircleBold } from './UserCircleBold';
import { UserCircleBoldDuotone } from './UserCircleBoldDuotone';
import { UserCircleFill } from './UserCircleFill';
import { UserCircleFillDuotone } from './UserCircleFillDuotone';

export interface UserCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { UserCircleRegular } from 'stera-icons/UserCircleRegular';
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

export { UserCircle };
