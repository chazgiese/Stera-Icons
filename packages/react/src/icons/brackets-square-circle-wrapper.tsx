import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareCircleIcon as BracketsSquareCircleIconRegular } from './brackets-square-circle';
import { BracketsSquareCircleIconBold } from './brackets-square-circle-bold';
import { BracketsSquareCircleIconFilled } from './brackets-square-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BracketsSquareCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const BracketsSquareCircleIcon = memo(forwardRef<SVGSVGElement, BracketsSquareCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BracketsSquareCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BracketsSquareCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BracketsSquareCircleIconRegular ref={ref} {...props} />;
  }
}));

BracketsSquareCircleIcon.displayName = 'BracketsSquareCircleIcon';

export { BracketsSquareCircleIcon };
