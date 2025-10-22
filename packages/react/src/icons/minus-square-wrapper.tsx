import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MinusSquareIcon as MinusSquareIconRegular } from './minus-square';
import { MinusSquareIconBold } from './minus-square-bold';
import { MinusSquareIconFilled } from './minus-square-filled';
import { MinusSquareIconFilltone } from './minus-square-filltone';
import { MinusSquareIconLinetone } from './minus-square-linetone';

export interface MinusSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const MinusSquareIcon = memo(forwardRef<SVGSVGElement, MinusSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MinusSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MinusSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MinusSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MinusSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MinusSquareIconRegular ref={ref} {...props} />;
  }
}));

MinusSquareIcon.displayName = 'MinusSquareIcon';

export { MinusSquareIcon };
