import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockPasswordOpenIcon as RegularLockPasswordOpenIcon } from './lock-password-open';
import { LockPasswordOpenIconDuotone as LockPasswordOpenIconDuotone } from './lock-password-open-duotone';
import { LockPasswordOpenIconBold as LockPasswordOpenIconBold } from './lock-password-open-bold';
import { LockPasswordOpenIconBoldDuotone as LockPasswordOpenIconBoldDuotone } from './lock-password-open-bold-duotone';
import { LockPasswordOpenIconFill as LockPasswordOpenIconFill } from './lock-password-open-fill';
import { LockPasswordOpenIconFillDuotone as LockPasswordOpenIconFillDuotone } from './lock-password-open-fill-duotone';

export interface LockPasswordOpenIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LockPasswordOpenIcon = memo(forwardRef<SVGSVGElement, LockPasswordOpenIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockPasswordOpenIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LockPasswordOpenIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LockPasswordOpenIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LockPasswordOpenIconFill ref={ref} {...props} />;
  if (duotone) return <LockPasswordOpenIconDuotone ref={ref} {...props} />;
  return <RegularLockPasswordOpenIcon ref={ref} {...props} />;
}));

LockPasswordOpenIcon.displayName = 'LockPasswordOpenIcon';

export { LockPasswordOpenIcon };
