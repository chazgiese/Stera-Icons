import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockOpenIcon as LockOpenIconRegular } from './lock-open';
import { LockOpenIconBold } from './lock-open-bold';
import { LockOpenIconFilled } from './lock-open-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface LockOpenIconProps extends IconProps {
  variant?: IconVariant;
}

const LockOpenIcon = memo(forwardRef<SVGSVGElement, LockOpenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockOpenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockOpenIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <LockOpenIconRegular ref={ref} {...props} />;
  }
}));

LockOpenIcon.displayName = 'LockOpenIcon';

export { LockOpenIcon };
