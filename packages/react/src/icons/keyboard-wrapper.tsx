import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { KeyboardIcon as RegularKeyboardIcon } from './keyboard';
import { KeyboardIconBold } from './keyboard-bold';
import { KeyboardIconFilled } from './keyboard-filled';
import { KeyboardIconFilltone } from './keyboard-filltone';
import { KeyboardIconLinetone } from './keyboard-linetone';

export interface KeyboardIconProps extends IconProps {
  variant?: IconVariant;
}

const KeyboardIcon = memo(forwardRef<SVGSVGElement, KeyboardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <KeyboardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <KeyboardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <KeyboardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <KeyboardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularKeyboardIcon ref={ref} {...props} />;
  }
}));

KeyboardIcon.displayName = 'KeyboardIcon';

export { KeyboardIcon };
