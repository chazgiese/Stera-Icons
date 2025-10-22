import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MinusIcon as RegularMinusIcon } from './minus';
import { MinusIconBold } from './minus-bold';
import { MinusIconFilled } from './minus-filled';
import { MinusIconFilltone } from './minus-filltone';
import { MinusIconLinetone } from './minus-linetone';

export interface MinusIconProps extends IconProps {
  variant?: IconVariant;
}

const MinusIcon = memo(forwardRef<SVGSVGElement, MinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMinusIcon ref={ref} {...props} />;
  }
}));

MinusIcon.displayName = 'MinusIcon';

export { MinusIcon };
