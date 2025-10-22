import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SquareIcon as SquareIconRegular } from './square';
import { SquareIconBold } from './square-bold';
import { SquareIconFilled } from './square-filled';
import { SquareIconFilltone } from './square-filltone';
import { SquareIconLinetone } from './square-linetone';

export interface SquareIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareIcon = memo(forwardRef<SVGSVGElement, SquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareIconRegular ref={ref} {...props} />;
  }
}));

SquareIcon.displayName = 'SquareIcon';

export { SquareIcon };
