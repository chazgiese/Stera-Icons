import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignalZeroIcon as RegularSignalZeroIcon } from './signal-zero';
import { SignalZeroIconBold } from './signal-zero-bold';
import { SignalZeroIconFilled } from './signal-zero-filled';
import { SignalZeroIconFilltone } from './signal-zero-filltone';
import { SignalZeroIconLinetone } from './signal-zero-linetone';

export interface SignalZeroIconProps extends IconProps {
  variant?: IconVariant;
}

const SignalZeroIcon = memo(forwardRef<SVGSVGElement, SignalZeroIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignalZeroIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignalZeroIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignalZeroIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignalZeroIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignalZeroIcon ref={ref} {...props} />;
  }
}));

SignalZeroIcon.displayName = 'SignalZeroIcon';

export { SignalZeroIcon };
