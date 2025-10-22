import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { KeyIcon as RegularKeyIcon } from './key';
import { KeyIconBold } from './key-bold';
import { KeyIconFilled } from './key-filled';
import { KeyIconFilltone } from './key-filltone';
import { KeyIconLinetone } from './key-linetone';

export interface KeyIconProps extends IconProps {
  variant?: IconVariant;
}

const KeyIcon = memo(forwardRef<SVGSVGElement, KeyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <KeyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <KeyIconBold ref={ref} {...props} />;
    case 'filltone':
      return <KeyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <KeyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularKeyIcon ref={ref} {...props} />;
  }
}));

KeyIcon.displayName = 'KeyIcon';

export { KeyIcon };
