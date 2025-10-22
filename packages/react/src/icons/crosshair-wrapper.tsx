import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CrosshairIcon as CrosshairIconRegular } from './crosshair';
import { CrosshairIconBold } from './crosshair-bold';
import { CrosshairIconFilled } from './crosshair-filled';
import { CrosshairIconFilltone } from './crosshair-filltone';
import { CrosshairIconLinetone } from './crosshair-linetone';

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
    case 'filltone':
      return <CrosshairIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CrosshairIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CrosshairIconRegular ref={ref} {...props} />;
  }
}));

CrosshairIcon.displayName = 'CrosshairIcon';

export { CrosshairIcon };
