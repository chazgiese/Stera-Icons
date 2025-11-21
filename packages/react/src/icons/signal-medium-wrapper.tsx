import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalMediumIcon as RegularSignalMediumIcon } from './signal-medium';
import { SignalMediumIconBold } from './signal-medium-bold';
import { SignalMediumIconFilled } from './signal-medium-filled';
import { SignalMediumIconFilltone } from './signal-medium-filltone';
import { SignalMediumIconLinetone } from './signal-medium-linetone';

export interface SignalMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalMediumIcon = memo(forwardRef<SVGSVGElement, SignalMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalMediumIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalMediumIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalMediumIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalMediumIcon ref={ref} {...props} />;
  }
}));

SignalMediumIcon.displayName = 'SignalMediumIcon';

export { SignalMediumIcon };
