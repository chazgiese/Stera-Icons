import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayersSimpleIcon as RegularLayersSimpleIcon } from './layers-simple';
import { LayersSimpleIconBold } from './layers-simple-bold';
import { LayersSimpleIconFilled } from './layers-simple-filled';
import { LayersSimpleIconFilltone } from './layers-simple-filltone';
import { LayersSimpleIconLinetone } from './layers-simple-linetone';

export interface LayersSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const LayersSimpleIcon = memo(forwardRef<SVGSVGElement, LayersSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayersSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayersSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayersSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayersSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayersSimpleIcon ref={ref} {...props} />;
  }
}));

LayersSimpleIcon.displayName = 'LayersSimpleIcon';

export { LayersSimpleIcon };
