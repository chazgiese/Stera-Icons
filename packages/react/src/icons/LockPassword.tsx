import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockPasswordRegular } from './LockPasswordRegular';
import { LockPasswordRegularDuotone } from './LockPasswordRegularDuotone';
import { LockPasswordBold } from './LockPasswordBold';
import { LockPasswordBoldDuotone } from './LockPasswordBoldDuotone';
import { LockPasswordFill } from './LockPasswordFill';
import { LockPasswordFillDuotone } from './LockPasswordFillDuotone';

export interface LockPasswordProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LockPassword with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LockPasswordRegular } from 'stera-icons/LockPasswordRegular';
 */
const LockPassword = memo(forwardRef<SVGSVGElement, LockPasswordProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockPasswordBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LockPasswordBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LockPasswordFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LockPasswordFill ref={ref} {...rest} />;
  if (duotone) return <LockPasswordRegularDuotone ref={ref} {...rest} />;
  return <LockPasswordRegular ref={ref} {...rest} />;
}));

LockPassword.displayName = 'LockPassword';

export { LockPassword };
