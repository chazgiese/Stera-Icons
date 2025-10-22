import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DiamondIcon as RegularDiamondIcon } from './diamond';
import { DiamondIconBold } from './diamond-bold';
import { DiamondIconFilled } from './diamond-filled';
import { DiamondIconFilltone } from './diamond-filltone';
import { DiamondIconLinetone } from './diamond-linetone';

export interface DiamondIconProps extends IconProps {
  variant?: IconVariant;
}

const DiamondIcon = memo(forwardRef<SVGSVGElement, DiamondIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DiamondIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DiamondIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DiamondIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DiamondIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDiamondIcon ref={ref} {...props} />;
  }
}));

DiamondIcon.displayName = 'DiamondIcon';

export { DiamondIcon };
