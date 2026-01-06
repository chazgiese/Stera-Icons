import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockOpenIcon as RegularLockOpenIcon } from './lock-open';
import { LockOpenIconDuotone as LockOpenIconDuotone } from './lock-open-duotone';
import { LockOpenIconBold as LockOpenIconBold } from './lock-open-bold';
import { LockOpenIconBoldDuotone as LockOpenIconBoldDuotone } from './lock-open-bold-duotone';
import { LockOpenIconFill as LockOpenIconFill } from './lock-open-fill';
import { LockOpenIconFillDuotone as LockOpenIconFillDuotone } from './lock-open-fill-duotone';

export interface LockOpenIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LockOpenIcon = memo(forwardRef<SVGSVGElement, LockOpenIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockOpenIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LockOpenIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LockOpenIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LockOpenIconFill ref={ref} {...props} />;
  if (duotone) return <LockOpenIconDuotone ref={ref} {...props} />;
  return <RegularLockOpenIcon ref={ref} {...props} />;
}));

LockOpenIcon.displayName = 'LockOpenIcon';

export { LockOpenIcon };
