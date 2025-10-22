import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { KeyholeIcon as KeyholeIconRegular } from './keyhole';
import { KeyholeIconBold } from './keyhole-bold';
import { KeyholeIconFilled } from './keyhole-filled';
import { KeyholeIconFilltone } from './keyhole-filltone';
import { KeyholeIconLinetone } from './keyhole-linetone';

export interface KeyholeIconProps extends IconProps {
  variant?: IconVariant;
}

const KeyholeIcon = memo(forwardRef<SVGSVGElement, KeyholeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <KeyholeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <KeyholeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <KeyholeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <KeyholeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <KeyholeIconRegular ref={ref} {...props} />;
  }
}));

KeyholeIcon.displayName = 'KeyholeIcon';

export { KeyholeIcon };
