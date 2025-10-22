import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayersIcon as LayersIconRegular } from './layers';
import { LayersIconBold } from './layers-bold';
import { LayersIconFilled } from './layers-filled';
import { LayersIconFilltone } from './layers-filltone';
import { LayersIconLinetone } from './layers-linetone';

export interface LayersIconProps extends IconProps {
  variant?: IconVariant;
}

const LayersIcon = memo(forwardRef<SVGSVGElement, LayersIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayersIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayersIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayersIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayersIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LayersIconRegular ref={ref} {...props} />;
  }
}));

LayersIcon.displayName = 'LayersIcon';

export { LayersIcon };
