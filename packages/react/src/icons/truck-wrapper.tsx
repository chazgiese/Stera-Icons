import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TruckIcon as RegularTruckIcon } from './truck';
import { TruckIconBold } from './truck-bold';
import { TruckIconFilled } from './truck-filled';
import { TruckIconFilltone } from './truck-filltone';
import { TruckIconLinetone } from './truck-linetone';

export interface TruckIconProps extends IconProps {
  variant?: IconVariant;
}

const TruckIcon = memo(forwardRef<SVGSVGElement, TruckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TruckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TruckIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TruckIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TruckIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTruckIcon ref={ref} {...props} />;
  }
}));

TruckIcon.displayName = 'TruckIcon';

export { TruckIcon };
