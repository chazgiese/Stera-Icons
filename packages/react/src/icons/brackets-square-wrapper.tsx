import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BracketsSquareIcon as RegularBracketsSquareIcon } from './brackets-square';
import { BracketsSquareIconBold } from './brackets-square-bold';
import { BracketsSquareIconFilled } from './brackets-square-filled';
import { BracketsSquareIconFilltone } from './brackets-square-filltone';
import { BracketsSquareIconLinetone } from './brackets-square-linetone';

export interface BracketsSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const BracketsSquareIcon = memo(forwardRef<SVGSVGElement, BracketsSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BracketsSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BracketsSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BracketsSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BracketsSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBracketsSquareIcon ref={ref} {...props} />;
  }
}));

BracketsSquareIcon.displayName = 'BracketsSquareIcon';

export { BracketsSquareIcon };
