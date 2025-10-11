import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckCircleIcon as CheckCircleIconRegular } from './check-circle';
import { CheckCircleIconBold } from './check-circle-bold';
import { CheckCircleIconFilled } from './check-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CheckCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const CheckCircleIcon = memo(forwardRef<SVGSVGElement, CheckCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CheckCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CheckCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CheckCircleIconRegular ref={ref} {...props} />;
  }
}));

CheckCircleIcon.displayName = 'CheckCircleIcon';

export { CheckCircleIcon };
