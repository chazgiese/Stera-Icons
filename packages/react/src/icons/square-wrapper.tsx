import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareIcon as SquareIconRegular } from './square';
import { SquareIconBold } from './square-bold';
import { SquareIconFilled } from './square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SquareIconRegular ref={ref} {...props} />;
  }
}));

SquareIcon.displayName = 'SquareIcon';

export { SquareIcon };
