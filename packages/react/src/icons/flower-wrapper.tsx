import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowerIcon as FlowerIconRegular } from './flower';
import { FlowerIconBold } from './flower-bold';
import { FlowerIconFilled } from './flower-filled';
import { FlowerIconFilltone } from './flower-filltone';
import { FlowerIconLinetone } from './flower-linetone';

export interface FlowerIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowerIcon = memo(forwardRef<SVGSVGElement, FlowerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowerIconRegular ref={ref} {...props} />;
  }
}));

FlowerIcon.displayName = 'FlowerIcon';

export { FlowerIcon };
