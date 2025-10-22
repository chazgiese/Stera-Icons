import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BracketsSquareCircleIcon as RegularBracketsSquareCircleIcon } from './brackets-square-circle';
import { BracketsSquareCircleIconBold } from './brackets-square-circle-bold';
import { BracketsSquareCircleIconFilled } from './brackets-square-circle-filled';
import { BracketsSquareCircleIconFilltone } from './brackets-square-circle-filltone';
import { BracketsSquareCircleIconLinetone } from './brackets-square-circle-linetone';

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
    case 'filltone':
      return <BracketsSquareCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BracketsSquareCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBracketsSquareCircleIcon ref={ref} {...props} />;
  }
}));

BracketsSquareCircleIcon.displayName = 'BracketsSquareCircleIcon';

export { BracketsSquareCircleIcon };
