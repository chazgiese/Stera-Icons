import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDashIcon as CircleDashIconRegular } from './circle-dash';
import { CircleDashIconBold } from './circle-dash-bold';
import { CircleDashIconFilled } from './circle-dash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleDashIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDashIcon = memo(forwardRef<SVGSVGElement, CircleDashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDashIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDashIconRegular ref={ref} {...props} />;
  }
}));

CircleDashIcon.displayName = 'CircleDashIcon';

export { CircleDashIcon };
