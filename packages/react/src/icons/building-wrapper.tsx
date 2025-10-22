import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BuildingIcon as BuildingIconRegular } from './building';
import { BuildingIconBold } from './building-bold';
import { BuildingIconFilled } from './building-filled';
import { BuildingIconFilltone } from './building-filltone';
import { BuildingIconLinetone } from './building-linetone';

export interface BuildingIconProps extends IconProps {
  variant?: IconVariant;
}

const BuildingIcon = memo(forwardRef<SVGSVGElement, BuildingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BuildingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BuildingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BuildingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BuildingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BuildingIconRegular ref={ref} {...props} />;
  }
}));

BuildingIcon.displayName = 'BuildingIcon';

export { BuildingIcon };
