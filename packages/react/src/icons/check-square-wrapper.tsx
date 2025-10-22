import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CheckSquareIcon as CheckSquareIconRegular } from './check-square';
import { CheckSquareIconBold } from './check-square-bold';
import { CheckSquareIconFilled } from './check-square-filled';
import { CheckSquareIconFilltone } from './check-square-filltone';
import { CheckSquareIconLinetone } from './check-square-linetone';

export interface CheckSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const CheckSquareIcon = memo(forwardRef<SVGSVGElement, CheckSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CheckSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CheckSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CheckSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CheckSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CheckSquareIconRegular ref={ref} {...props} />;
  }
}));

CheckSquareIcon.displayName = 'CheckSquareIcon';

export { CheckSquareIcon };
