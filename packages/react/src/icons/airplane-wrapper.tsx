import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AirplaneIcon as RegularAirplaneIcon } from './airplane';
import { AirplaneIconBold } from './airplane-bold';
import { AirplaneIconFilled } from './airplane-filled';
import { AirplaneIconFilltone } from './airplane-filltone';
import { AirplaneIconLinetone } from './airplane-linetone';

export interface AirplaneIconProps extends IconProps {
  variant?: IconVariant;
}

const AirplaneIcon = memo(forwardRef<SVGSVGElement, AirplaneIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AirplaneIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AirplaneIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AirplaneIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AirplaneIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAirplaneIcon ref={ref} {...props} />;
  }
}));

AirplaneIcon.displayName = 'AirplaneIcon';

export { AirplaneIcon };
