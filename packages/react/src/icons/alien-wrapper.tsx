import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlienIcon as AlienIconRegular } from './alien';
import { AlienIconBold } from './alien-bold';
import { AlienIconFilled } from './alien-filled';
import { AlienIconFilltone } from './alien-filltone';
import { AlienIconLinetone } from './alien-linetone';

export interface AlienIconProps extends IconProps {
  variant?: IconVariant;
}

const AlienIcon = memo(forwardRef<SVGSVGElement, AlienIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlienIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlienIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlienIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlienIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlienIconRegular ref={ref} {...props} />;
  }
}));

AlienIcon.displayName = 'AlienIcon';

export { AlienIcon };
