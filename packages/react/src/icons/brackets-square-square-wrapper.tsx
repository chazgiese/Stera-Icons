import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BracketsSquareSquareIcon as BracketsSquareSquareIconRegular } from './brackets-square-square';
import { BracketsSquareSquareIconBold } from './brackets-square-square-bold';
import { BracketsSquareSquareIconFilled } from './brackets-square-square-filled';
import { BracketsSquareSquareIconFilltone } from './brackets-square-square-filltone';
import { BracketsSquareSquareIconLinetone } from './brackets-square-square-linetone';

export interface BracketsSquareSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const BracketsSquareSquareIcon = memo(forwardRef<SVGSVGElement, BracketsSquareSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BracketsSquareSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BracketsSquareSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BracketsSquareSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BracketsSquareSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BracketsSquareSquareIconRegular ref={ref} {...props} />;
  }
}));

BracketsSquareSquareIcon.displayName = 'BracketsSquareSquareIcon';

export { BracketsSquareSquareIcon };
