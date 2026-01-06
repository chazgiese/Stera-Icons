import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockPasswordIcon as RegularLockPasswordIcon } from './lock-password';
import { LockPasswordIconDuotone as LockPasswordIconDuotone } from './lock-password-duotone';
import { LockPasswordIconBold as LockPasswordIconBold } from './lock-password-bold';
import { LockPasswordIconBoldDuotone as LockPasswordIconBoldDuotone } from './lock-password-bold-duotone';
import { LockPasswordIconFill as LockPasswordIconFill } from './lock-password-fill';
import { LockPasswordIconFillDuotone as LockPasswordIconFillDuotone } from './lock-password-fill-duotone';

export interface LockPasswordIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LockPasswordIcon = memo(forwardRef<SVGSVGElement, LockPasswordIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockPasswordIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LockPasswordIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LockPasswordIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LockPasswordIconFill ref={ref} {...props} />;
  if (duotone) return <LockPasswordIconDuotone ref={ref} {...props} />;
  return <RegularLockPasswordIcon ref={ref} {...props} />;
}));

LockPasswordIcon.displayName = 'LockPasswordIcon';

export { LockPasswordIcon };
