import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsDiagonalAltIcon as ArrowsDiagonalAltIconRegular } from './arrows-diagonal-alt';
import { ArrowsDiagonalAltIconBold } from './arrows-diagonal-alt-bold';
import { ArrowsDiagonalAltIconFilled } from './arrows-diagonal-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsDiagonalAltIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsDiagonalAltIcon = memo(forwardRef<SVGSVGElement, ArrowsDiagonalAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsDiagonalAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsDiagonalAltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsDiagonalAltIconRegular ref={ref} {...props} />;
  }
}));

ArrowsDiagonalAltIcon.displayName = 'ArrowsDiagonalAltIcon';

export { ArrowsDiagonalAltIcon };
