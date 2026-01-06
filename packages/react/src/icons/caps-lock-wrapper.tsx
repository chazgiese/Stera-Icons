import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CapsLockIcon as RegularCapsLockIcon } from './caps-lock';
import { CapsLockIconDuotone as CapsLockIconDuotone } from './caps-lock-duotone';
import { CapsLockIconBold as CapsLockIconBold } from './caps-lock-bold';
import { CapsLockIconBoldDuotone as CapsLockIconBoldDuotone } from './caps-lock-bold-duotone';
import { CapsLockIconFill as CapsLockIconFill } from './caps-lock-fill';
import { CapsLockIconFillDuotone as CapsLockIconFillDuotone } from './caps-lock-fill-duotone';

export interface CapsLockIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CapsLockIcon = memo(forwardRef<SVGSVGElement, CapsLockIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CapsLockIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CapsLockIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CapsLockIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CapsLockIconFill ref={ref} {...props} />;
  if (duotone) return <CapsLockIconDuotone ref={ref} {...props} />;
  return <RegularCapsLockIcon ref={ref} {...props} />;
}));

CapsLockIcon.displayName = 'CapsLockIcon';

export { CapsLockIcon };
