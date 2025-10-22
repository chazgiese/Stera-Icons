import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlashlightIcon as RegularFlashlightIcon } from './flashlight';
import { FlashlightIconBold } from './flashlight-bold';
import { FlashlightIconFilled } from './flashlight-filled';
import { FlashlightIconFilltone } from './flashlight-filltone';
import { FlashlightIconLinetone } from './flashlight-linetone';

export interface FlashlightIconProps extends IconProps {
  variant?: IconVariant;
}

const FlashlightIcon = memo(forwardRef<SVGSVGElement, FlashlightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlashlightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlashlightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlashlightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlashlightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlashlightIcon ref={ref} {...props} />;
  }
}));

FlashlightIcon.displayName = 'FlashlightIcon';

export { FlashlightIcon };
