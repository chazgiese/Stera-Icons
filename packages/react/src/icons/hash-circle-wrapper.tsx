import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HashCircleIcon as RegularHashCircleIcon } from './hash-circle';
import { HashCircleIconBold } from './hash-circle-bold';
import { HashCircleIconFilled } from './hash-circle-filled';
import { HashCircleIconFilltone } from './hash-circle-filltone';
import { HashCircleIconLinetone } from './hash-circle-linetone';

export interface HashCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const HashCircleIcon = memo(forwardRef<SVGSVGElement, HashCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HashCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HashCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HashCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HashCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHashCircleIcon ref={ref} {...props} />;
  }
}));

HashCircleIcon.displayName = 'HashCircleIcon';

export { HashCircleIcon };
