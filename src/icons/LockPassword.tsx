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
 * LockPassword - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LockPasswordRegular } from 'stera-icons/icons/LockPasswordRegular';
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

// Triple export pattern (lucide-react style)
export { LockPassword, LockPassword as LockPasswordIcon, LockPassword as SiLockPassword };
export default LockPassword;
