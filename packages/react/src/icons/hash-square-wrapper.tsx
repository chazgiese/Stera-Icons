import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HashSquareIcon as RegularHashSquareIcon } from './hash-square';
import { HashSquareIconBold } from './hash-square-bold';
import { HashSquareIconFilled } from './hash-square-filled';
import { HashSquareIconFilltone } from './hash-square-filltone';
import { HashSquareIconLinetone } from './hash-square-linetone';

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
    case 'filltone':
      return <HashSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HashSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHashSquareIcon ref={ref} {...props} />;
  }
}));

HashSquareIcon.displayName = 'HashSquareIcon';

export { HashSquareIcon };
