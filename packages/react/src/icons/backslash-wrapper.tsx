import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BackslashIcon as RegularBackslashIcon } from './backslash';
import { BackslashIconBold } from './backslash-bold';
import { BackslashIconFilled } from './backslash-filled';
import { BackslashIconFilltone } from './backslash-filltone';
import { BackslashIconLinetone } from './backslash-linetone';

export interface BackslashIconProps extends IconProps {
  variant?: IconVariant;
}

const BackslashIcon = memo(forwardRef<SVGSVGElement, BackslashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BackslashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BackslashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BackslashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BackslashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBackslashIcon ref={ref} {...props} />;
  }
}));

BackslashIcon.displayName = 'BackslashIcon';

export { BackslashIcon };
