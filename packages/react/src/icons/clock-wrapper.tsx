import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ClockIcon as RegularClockIcon } from './clock';
import { ClockIconBold } from './clock-bold';
import { ClockIconFilled } from './clock-filled';
import { ClockIconFilltone } from './clock-filltone';
import { ClockIconLinetone } from './clock-linetone';

export interface ClockIconProps extends IconProps {
  variant?: IconVariant;
}

const ClockIcon = memo(forwardRef<SVGSVGElement, ClockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ClockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ClockIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ClockIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ClockIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClockIcon ref={ref} {...props} />;
  }
}));

ClockIcon.displayName = 'ClockIcon';

export { ClockIcon };
