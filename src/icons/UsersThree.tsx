import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UsersThreeRegular } from './UsersThreeRegular.js';
import { UsersThreeRegularDuotone } from './UsersThreeRegularDuotone.js';
import { UsersThreeBold } from './UsersThreeBold.js';
import { UsersThreeBoldDuotone } from './UsersThreeBoldDuotone.js';
import { UsersThreeFill } from './UsersThreeFill.js';
import { UsersThreeFillDuotone } from './UsersThreeFillDuotone.js';

export interface UsersThreeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UsersThree - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UsersThreeRegular } from 'stera-icons/icons/UsersThreeRegular';
 */
const UsersThree = memo(forwardRef<SVGSVGElement, UsersThreeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UsersThreeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UsersThreeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UsersThreeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UsersThreeFill ref={ref} {...rest} />;
  if (duotone) return <UsersThreeRegularDuotone ref={ref} {...rest} />;
  return <UsersThreeRegular ref={ref} {...rest} />;
}));

UsersThree.displayName = 'UsersThree';

// Triple export pattern (lucide-react style)
export { UsersThree, UsersThree as UsersThreeIcon, UsersThree as SiUsersThree };
export default UsersThree;
