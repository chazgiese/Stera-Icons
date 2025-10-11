import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareSquareIcon as BracketsSquareSquareIconRegular } from './brackets-square-square';
import { BracketsSquareSquareIconBold } from './brackets-square-square-bold';
import { BracketsSquareSquareIconFilled } from './brackets-square-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BracketsSquareSquareIconRegular ref={ref} {...props} />;
  }
}));

BracketsSquareSquareIcon.displayName = 'BracketsSquareSquareIcon';

export { BracketsSquareSquareIcon };
