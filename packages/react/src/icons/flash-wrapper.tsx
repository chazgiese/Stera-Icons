import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlashIcon as RegularFlashIcon } from './flash';
import { FlashIconBold } from './flash-bold';
import { FlashIconFilled } from './flash-filled';
import { FlashIconFilltone } from './flash-filltone';
import { FlashIconLinetone } from './flash-linetone';

export interface FlashIconProps extends IconProps {
  variant?: IconVariant;
}

const FlashIcon = memo(forwardRef<SVGSVGElement, FlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlashIcon ref={ref} {...props} />;
  }
}));

FlashIcon.displayName = 'FlashIcon';

export { FlashIcon };
