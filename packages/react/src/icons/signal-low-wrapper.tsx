import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalLowIcon as RegularSignalLowIcon } from './signal-low';
import { SignalLowIconBold } from './signal-low-bold';
import { SignalLowIconFilled } from './signal-low-filled';
import { SignalLowIconFilltone } from './signal-low-filltone';
import { SignalLowIconLinetone } from './signal-low-linetone';

export interface SignalLowIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalLowIcon = memo(forwardRef<SVGSVGElement, SignalLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalLowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalLowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalLowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalLowIcon ref={ref} {...props} />;
  }
}));

SignalLowIcon.displayName = 'SignalLowIcon';

export { SignalLowIcon };
