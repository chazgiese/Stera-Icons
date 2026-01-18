import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UsersThreeRegular } from './UsersThreeRegular';
import { UsersThreeRegularDuotone } from './UsersThreeRegularDuotone';
import { UsersThreeBold } from './UsersThreeBold';
import { UsersThreeBoldDuotone } from './UsersThreeBoldDuotone';
import { UsersThreeFill } from './UsersThreeFill';
import { UsersThreeFillDuotone } from './UsersThreeFillDuotone';

export interface UsersThreeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UsersThree with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { UsersThreeRegular } from 'stera-icons/UsersThreeRegular';
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

export { UsersThree };
