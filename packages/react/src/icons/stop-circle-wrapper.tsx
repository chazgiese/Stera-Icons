import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { StopCircleIcon as RegularStopCircleIcon } from './stop-circle';
import { StopCircleIconBold } from './stop-circle-bold';
import { StopCircleIconFilled } from './stop-circle-filled';
import { StopCircleIconFilltone } from './stop-circle-filltone';
import { StopCircleIconLinetone } from './stop-circle-linetone';

export interface StopCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const StopCircleIcon = memo(forwardRef<SVGSVGElement, StopCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <StopCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <StopCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <StopCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <StopCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularStopCircleIcon ref={ref} {...props} />;
  }
}));

StopCircleIcon.displayName = 'StopCircleIcon';

export { StopCircleIcon };
