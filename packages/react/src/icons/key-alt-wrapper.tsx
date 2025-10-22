import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { KeyAltIcon as RegularKeyAltIcon } from './key-alt';
import { KeyAltIconBold } from './key-alt-bold';
import { KeyAltIconFilled } from './key-alt-filled';
import { KeyAltIconFilltone } from './key-alt-filltone';
import { KeyAltIconLinetone } from './key-alt-linetone';

export interface KeyAltIconProps extends IconProps {
  variant?: IconVariant;
}

const KeyAltIcon = memo(forwardRef<SVGSVGElement, KeyAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <KeyAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <KeyAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <KeyAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <KeyAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularKeyAltIcon ref={ref} {...props} />;
  }
}));

KeyAltIcon.displayName = 'KeyAltIcon';

export { KeyAltIcon };
