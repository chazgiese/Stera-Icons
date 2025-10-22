import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HeadphonesIcon as HeadphonesIconRegular } from './headphones';
import { HeadphonesIconBold } from './headphones-bold';
import { HeadphonesIconFilled } from './headphones-filled';
import { HeadphonesIconFilltone } from './headphones-filltone';
import { HeadphonesIconLinetone } from './headphones-linetone';

export interface HeadphonesIconProps extends IconProps {
  variant?: IconVariant;
}

const HeadphonesIcon = memo(forwardRef<SVGSVGElement, HeadphonesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HeadphonesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HeadphonesIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HeadphonesIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HeadphonesIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <HeadphonesIconRegular ref={ref} {...props} />;
  }
}));

HeadphonesIcon.displayName = 'HeadphonesIcon';

export { HeadphonesIcon };
