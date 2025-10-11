import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsDiagonalIcon as ArrowsDiagonalIconRegular } from './arrows-diagonal';
import { ArrowsDiagonalIconBold } from './arrows-diagonal-bold';
import { ArrowsDiagonalIconFilled } from './arrows-diagonal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsDiagonalIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsDiagonalIcon = memo(forwardRef<SVGSVGElement, ArrowsDiagonalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsDiagonalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsDiagonalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsDiagonalIconRegular ref={ref} {...props} />;
  }
}));

ArrowsDiagonalIcon.displayName = 'ArrowsDiagonalIcon';

export { ArrowsDiagonalIcon };
