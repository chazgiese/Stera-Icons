import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CompassIcon as CompassIconRegular } from './compass';
import { CompassIconBold } from './compass-bold';
import { CompassIconFilled } from './compass-filled';
import { CompassIconFilltone } from './compass-filltone';
import { CompassIconLinetone } from './compass-linetone';

export interface CompassIconProps extends IconProps {
  variant?: IconVariant;
}

const CompassIcon = memo(forwardRef<SVGSVGElement, CompassIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CompassIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CompassIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CompassIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CompassIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CompassIconRegular ref={ref} {...props} />;
  }
}));

CompassIcon.displayName = 'CompassIcon';

export { CompassIcon };
