import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EyeOffIcon as RegularEyeOffIcon } from './eye-off';
import { EyeOffIconBold } from './eye-off-bold';
import { EyeOffIconFilled } from './eye-off-filled';
import { EyeOffIconFilltone } from './eye-off-filltone';
import { EyeOffIconLinetone } from './eye-off-linetone';

export interface EyeOffIconProps extends IconProps {
  variant?: IconVariant;
}

const EyeOffIcon = memo(forwardRef<SVGSVGElement, EyeOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EyeOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EyeOffIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EyeOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EyeOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEyeOffIcon ref={ref} {...props} />;
  }
}));

EyeOffIcon.displayName = 'EyeOffIcon';

export { EyeOffIcon };
