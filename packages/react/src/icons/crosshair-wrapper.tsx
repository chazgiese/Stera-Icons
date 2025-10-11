import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CrosshairIcon as CrosshairIconRegular } from './crosshair';
import { CrosshairIconBold } from './crosshair-bold';
import { CrosshairIconFilled } from './crosshair-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CrosshairIconProps extends IconProps {
  variant?: IconVariant;
}

const CrosshairIcon = memo(forwardRef<SVGSVGElement, CrosshairIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CrosshairIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CrosshairIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CrosshairIconRegular ref={ref} {...props} />;
  }
}));

CrosshairIcon.displayName = 'CrosshairIcon';

export { CrosshairIcon };
