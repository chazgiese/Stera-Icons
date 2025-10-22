import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleIcon as CircleIconRegular } from './circle';
import { CircleIconBold } from './circle-bold';
import { CircleIconFilled } from './circle-filled';
import { CircleIconFilltone } from './circle-filltone';
import { CircleIconLinetone } from './circle-linetone';

export interface CircleIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleIcon = memo(forwardRef<SVGSVGElement, CircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleIconRegular ref={ref} {...props} />;
  }
}));

CircleIcon.displayName = 'CircleIcon';

export { CircleIcon };
