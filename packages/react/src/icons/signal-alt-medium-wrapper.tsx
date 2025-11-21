import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalAltMediumIcon as RegularSignalAltMediumIcon } from './signal-alt-medium';
import { SignalAltMediumIconBold } from './signal-alt-medium-bold';
import { SignalAltMediumIconFilled } from './signal-alt-medium-filled';
import { SignalAltMediumIconFilltone } from './signal-alt-medium-filltone';
import { SignalAltMediumIconLinetone } from './signal-alt-medium-linetone';

export interface SignalAltMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalAltMediumIcon = memo(forwardRef<SVGSVGElement, SignalAltMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalAltMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalAltMediumIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalAltMediumIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalAltMediumIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalAltMediumIcon ref={ref} {...props} />;
  }
}));

SignalAltMediumIcon.displayName = 'SignalAltMediumIcon';

export { SignalAltMediumIcon };
