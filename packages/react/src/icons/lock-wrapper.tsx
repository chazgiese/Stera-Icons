import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockIcon as LockIconRegular } from './lock';
import { LockIconBold } from './lock-bold';
import { LockIconFilled } from './lock-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface LockIconProps extends IconProps {
  variant?: IconVariant;
}

const LockIcon = memo(forwardRef<SVGSVGElement, LockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <LockIconRegular ref={ref} {...props} />;
  }
}));

LockIcon.displayName = 'LockIcon';

export { LockIcon };
