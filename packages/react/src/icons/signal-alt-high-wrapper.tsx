import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalAltHighIcon as RegularSignalAltHighIcon } from './signal-alt-high';
import { SignalAltHighIconBold } from './signal-alt-high-bold';
import { SignalAltHighIconFilled } from './signal-alt-high-filled';
import { SignalAltHighIconFilltone } from './signal-alt-high-filltone';
import { SignalAltHighIconLinetone } from './signal-alt-high-linetone';

export interface SignalAltHighIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalAltHighIcon = memo(forwardRef<SVGSVGElement, SignalAltHighIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalAltHighIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalAltHighIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalAltHighIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalAltHighIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalAltHighIcon ref={ref} {...props} />;
  }
}));

SignalAltHighIcon.displayName = 'SignalAltHighIcon';

export { SignalAltHighIcon };
