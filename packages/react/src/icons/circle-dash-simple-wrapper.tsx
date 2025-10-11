import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDashSimpleIcon as CircleDashSimpleIconRegular } from './circle-dash-simple';
import { CircleDashSimpleIconBold } from './circle-dash-simple-bold';
import { CircleDashSimpleIconFilled } from './circle-dash-simple-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleDashSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDashSimpleIcon = memo(forwardRef<SVGSVGElement, CircleDashSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDashSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDashSimpleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDashSimpleIconRegular ref={ref} {...props} />;
  }
}));

CircleDashSimpleIcon.displayName = 'CircleDashSimpleIcon';

export { CircleDashSimpleIcon };
