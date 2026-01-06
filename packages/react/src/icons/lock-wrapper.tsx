import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockIcon as RegularLockIcon } from './lock';
import { LockIconDuotone as LockIconDuotone } from './lock-duotone';
import { LockIconBold as LockIconBold } from './lock-bold';
import { LockIconBoldDuotone as LockIconBoldDuotone } from './lock-bold-duotone';
import { LockIconFill as LockIconFill } from './lock-fill';
import { LockIconFillDuotone as LockIconFillDuotone } from './lock-fill-duotone';

export interface LockIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LockIcon = memo(forwardRef<SVGSVGElement, LockIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LockIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LockIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LockIconFill ref={ref} {...props} />;
  if (duotone) return <LockIconDuotone ref={ref} {...props} />;
  return <RegularLockIcon ref={ref} {...props} />;
}));

LockIcon.displayName = 'LockIcon';

export { LockIcon };
