import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashSquareIcon as HashSquareIconRegular } from './hash-square';
import { HashSquareIconBold } from './hash-square-bold';
import { HashSquareIconFilled } from './hash-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HashSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const HashSquareIcon = memo(forwardRef<SVGSVGElement, HashSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HashSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HashSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HashSquareIconRegular ref={ref} {...props} />;
  }
}));

HashSquareIcon.displayName = 'HashSquareIcon';

export { HashSquareIcon };
