import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MinusCircleIcon as MinusCircleIconRegular } from './minus-circle';
import { MinusCircleIconBold } from './minus-circle-bold';
import { MinusCircleIconFilled } from './minus-circle-filled';
import { MinusCircleIconFilltone } from './minus-circle-filltone';
import { MinusCircleIconLinetone } from './minus-circle-linetone';

export interface MinusCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const MinusCircleIcon = memo(forwardRef<SVGSVGElement, MinusCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MinusCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MinusCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MinusCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MinusCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MinusCircleIconRegular ref={ref} {...props} />;
  }
}));

MinusCircleIcon.displayName = 'MinusCircleIcon';

export { MinusCircleIcon };
