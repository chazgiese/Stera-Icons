import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayersAltIcon as RegularLayersAltIcon } from './layers-alt';
import { LayersAltIconBold } from './layers-alt-bold';
import { LayersAltIconFilled } from './layers-alt-filled';
import { LayersAltIconFilltone } from './layers-alt-filltone';
import { LayersAltIconLinetone } from './layers-alt-linetone';

export interface LayersAltIconProps extends IconProps {
  variant?: IconVariant;
}

const LayersAltIcon = memo(forwardRef<SVGSVGElement, LayersAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayersAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayersAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayersAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayersAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayersAltIcon ref={ref} {...props} />;
  }
}));

LayersAltIcon.displayName = 'LayersAltIcon';

export { LayersAltIcon };
