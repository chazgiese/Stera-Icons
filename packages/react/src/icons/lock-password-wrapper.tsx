import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockPasswordIcon as LockPasswordIconRegular } from './lock-password';
import { LockPasswordIconBold } from './lock-password-bold';
import { LockPasswordIconFilled } from './lock-password-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface LockPasswordIconProps extends IconProps {
  variant?: IconVariant;
}

const LockPasswordIcon = memo(forwardRef<SVGSVGElement, LockPasswordIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockPasswordIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockPasswordIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <LockPasswordIconRegular ref={ref} {...props} />;
  }
}));

LockPasswordIcon.displayName = 'LockPasswordIcon';

export { LockPasswordIcon };
