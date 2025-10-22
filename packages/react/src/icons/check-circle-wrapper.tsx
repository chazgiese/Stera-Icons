import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CheckCircleIcon as CheckCircleIconRegular } from './check-circle';
import { CheckCircleIconBold } from './check-circle-bold';
import { CheckCircleIconFilled } from './check-circle-filled';
import { CheckCircleIconFilltone } from './check-circle-filltone';
import { CheckCircleIconLinetone } from './check-circle-linetone';

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
    case 'filltone':
      return <CheckCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CheckCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CheckCircleIconRegular ref={ref} {...props} />;
  }
}));

CheckCircleIcon.displayName = 'CheckCircleIcon';

export { CheckCircleIcon };
