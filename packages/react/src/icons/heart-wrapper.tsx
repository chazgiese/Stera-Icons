import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HeartIcon as RegularHeartIcon } from './heart';
import { HeartIconBold } from './heart-bold';
import { HeartIconFilled } from './heart-filled';
import { HeartIconFilltone } from './heart-filltone';
import { HeartIconLinetone } from './heart-linetone';

export interface HeartIconProps extends IconProps {
  variant?: IconVariant;
}

const HeartIcon = memo(forwardRef<SVGSVGElement, HeartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HeartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HeartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HeartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HeartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHeartIcon ref={ref} {...props} />;
  }
}));

HeartIcon.displayName = 'HeartIcon';

export { HeartIcon };
