import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VolleyballIcon as VolleyballIconRegular } from './volleyball';
import { VolleyballIconBold } from './volleyball-bold';
import { VolleyballIconFilled } from './volleyball-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <VolleyballIconRegular ref={ref} {...props} />;
  }
}));

VolleyballIcon.displayName = 'VolleyballIcon';

export { VolleyballIcon };
