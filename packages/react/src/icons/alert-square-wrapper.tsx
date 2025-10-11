import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertSquareIcon as AlertSquareIconRegular } from './alert-square';
import { AlertSquareIconBold } from './alert-square-bold';
import { AlertSquareIconFilled } from './alert-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlertSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertSquareIcon = memo(forwardRef<SVGSVGElement, AlertSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlertSquareIconRegular ref={ref} {...props} />;
  }
}));

AlertSquareIcon.displayName = 'AlertSquareIcon';

export { AlertSquareIcon };
