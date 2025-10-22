import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HashIcon as HashIconRegular } from './hash';
import { HashIconBold } from './hash-bold';
import { HashIconFilled } from './hash-filled';
import { HashIconFilltone } from './hash-filltone';
import { HashIconLinetone } from './hash-linetone';

export interface HashIconProps extends IconProps {
  variant?: IconVariant;
}

const HashIcon = memo(forwardRef<SVGSVGElement, HashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <HashIconRegular ref={ref} {...props} />;
  }
}));

HashIcon.displayName = 'HashIcon';

export { HashIcon };
