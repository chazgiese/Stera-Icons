import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EyeIcon as RegularEyeIcon } from './eye';
import { EyeIconBold } from './eye-bold';
import { EyeIconFilled } from './eye-filled';
import { EyeIconFilltone } from './eye-filltone';
import { EyeIconLinetone } from './eye-linetone';

export interface EyeIconProps extends IconProps {
  variant?: IconVariant;
}

const EyeIcon = memo(forwardRef<SVGSVGElement, EyeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EyeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EyeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EyeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EyeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEyeIcon ref={ref} {...props} />;
  }
}));

EyeIcon.displayName = 'EyeIcon';

export { EyeIcon };
