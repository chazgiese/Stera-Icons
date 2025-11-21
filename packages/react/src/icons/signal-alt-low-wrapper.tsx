import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalAltLowIcon as RegularSignalAltLowIcon } from './signal-alt-low';
import { SignalAltLowIconBold } from './signal-alt-low-bold';
import { SignalAltLowIconFilled } from './signal-alt-low-filled';
import { SignalAltLowIconFilltone } from './signal-alt-low-filltone';
import { SignalAltLowIconLinetone } from './signal-alt-low-linetone';

export interface SignalAltLowIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalAltLowIcon = memo(forwardRef<SVGSVGElement, SignalAltLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalAltLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalAltLowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalAltLowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalAltLowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalAltLowIcon ref={ref} {...props} />;
  }
}));

SignalAltLowIcon.displayName = 'SignalAltLowIcon';

export { SignalAltLowIcon };
