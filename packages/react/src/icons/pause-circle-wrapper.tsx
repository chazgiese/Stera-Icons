import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PauseCircleIcon as RegularPauseCircleIcon } from './pause-circle';
import { PauseCircleIconBold } from './pause-circle-bold';
import { PauseCircleIconFilled } from './pause-circle-filled';
import { PauseCircleIconFilltone } from './pause-circle-filltone';
import { PauseCircleIconLinetone } from './pause-circle-linetone';

export interface PauseCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PauseCircleIcon = memo(forwardRef<SVGSVGElement, PauseCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PauseCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PauseCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PauseCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PauseCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPauseCircleIcon ref={ref} {...props} />;
  }
}));

PauseCircleIcon.displayName = 'PauseCircleIcon';

export { PauseCircleIcon };
