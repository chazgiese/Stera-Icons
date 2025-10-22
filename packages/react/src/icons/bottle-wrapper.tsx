import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BottleIcon as BottleIconRegular } from './bottle';
import { BottleIconBold } from './bottle-bold';
import { BottleIconFilled } from './bottle-filled';
import { BottleIconFilltone } from './bottle-filltone';
import { BottleIconLinetone } from './bottle-linetone';

export interface BottleIconProps extends IconProps {
  variant?: IconVariant;
}

const BottleIcon = memo(forwardRef<SVGSVGElement, BottleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BottleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BottleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BottleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BottleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BottleIconRegular ref={ref} {...props} />;
  }
}));

BottleIcon.displayName = 'BottleIcon';

export { BottleIcon };
