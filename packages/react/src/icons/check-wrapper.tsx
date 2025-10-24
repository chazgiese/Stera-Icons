import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CheckIcon as RegularCheckIcon } from './check';
import { CheckIconBold } from './check-bold';
import { CheckIconFilled } from './check-filled';
import { CheckIconFilltone } from './check-filltone';
import { CheckIconLinetone } from './check-linetone';

export interface CheckIconProps extends IconProps {
  variant?: IconVariant;
}

const CheckIcon = memo(forwardRef<SVGSVGElement, CheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CheckIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CheckIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CheckIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCheckIcon ref={ref} {...props} />;
  }
}));

CheckIcon.displayName = 'CheckIcon';

export { CheckIcon };
