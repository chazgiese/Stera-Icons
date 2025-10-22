import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { VolleyballIcon as VolleyballIconRegular } from './volleyball';
import { VolleyballIconBold } from './volleyball-bold';
import { VolleyballIconFilled } from './volleyball-filled';
import { VolleyballIconFilltone } from './volleyball-filltone';
import { VolleyballIconLinetone } from './volleyball-linetone';

export interface VolleyballIconProps extends IconProps {
  variant?: IconVariant;
}

const VolleyballIcon = memo(forwardRef<SVGSVGElement, VolleyballIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <VolleyballIconFilled ref={ref} {...props} />;
    case 'bold':
      return <VolleyballIconBold ref={ref} {...props} />;
    case 'filltone':
      return <VolleyballIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <VolleyballIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <VolleyballIconRegular ref={ref} {...props} />;
  }
}));

VolleyballIcon.displayName = 'VolleyballIcon';

export { VolleyballIcon };
