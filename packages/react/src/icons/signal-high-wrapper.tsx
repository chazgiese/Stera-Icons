import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalHighIcon as RegularSignalHighIcon } from './signal-high';
import { SignalHighIconBold } from './signal-high-bold';
import { SignalHighIconFilled } from './signal-high-filled';
import { SignalHighIconFilltone } from './signal-high-filltone';
import { SignalHighIconLinetone } from './signal-high-linetone';

export interface SignalHighIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalHighIcon = memo(forwardRef<SVGSVGElement, SignalHighIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalHighIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalHighIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalHighIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalHighIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalHighIcon ref={ref} {...props} />;
  }
}));

SignalHighIcon.displayName = 'SignalHighIcon';

export { SignalHighIcon };
