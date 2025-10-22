import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EyeClosedIcon as EyeClosedIconRegular } from './eye-closed';
import { EyeClosedIconBold } from './eye-closed-bold';
import { EyeClosedIconFilled } from './eye-closed-filled';
import { EyeClosedIconFilltone } from './eye-closed-filltone';
import { EyeClosedIconLinetone } from './eye-closed-linetone';

export interface EyeClosedIconProps extends IconProps {
  variant?: IconVariant;
}

const EyeClosedIcon = memo(forwardRef<SVGSVGElement, EyeClosedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EyeClosedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EyeClosedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EyeClosedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EyeClosedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <EyeClosedIconRegular ref={ref} {...props} />;
  }
}));

EyeClosedIcon.displayName = 'EyeClosedIcon';

export { EyeClosedIcon };
