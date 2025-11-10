import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PushPinAltIcon as RegularPushPinAltIcon } from './push-pin-alt';
import { PushPinAltIconBold } from './push-pin-alt-bold';
import { PushPinAltIconFilled } from './push-pin-alt-filled';
import { PushPinAltIconFilltone } from './push-pin-alt-filltone';
import { PushPinAltIconLinetone } from './push-pin-alt-linetone';

export interface PushPinAltIconProps extends IconProps {
  variant?: IconVariant;
}

const PushPinAltIcon = memo(forwardRef<SVGSVGElement, PushPinAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PushPinAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PushPinAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PushPinAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PushPinAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPushPinAltIcon ref={ref} {...props} />;
  }
}));

PushPinAltIcon.displayName = 'PushPinAltIcon';

export { PushPinAltIcon };
