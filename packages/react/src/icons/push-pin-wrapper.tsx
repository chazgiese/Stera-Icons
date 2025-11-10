import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PushPinIcon as RegularPushPinIcon } from './push-pin';
import { PushPinIconBold } from './push-pin-bold';
import { PushPinIconFilled } from './push-pin-filled';
import { PushPinIconFilltone } from './push-pin-filltone';
import { PushPinIconLinetone } from './push-pin-linetone';

export interface PushPinIconProps extends IconProps {
  variant?: IconVariant;
}

const PushPinIcon = memo(forwardRef<SVGSVGElement, PushPinIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PushPinIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PushPinIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PushPinIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PushPinIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPushPinIcon ref={ref} {...props} />;
  }
}));

PushPinIcon.displayName = 'PushPinIcon';

export { PushPinIcon };
