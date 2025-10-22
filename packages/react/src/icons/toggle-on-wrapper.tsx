import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ToggleOnIcon as ToggleOnIconRegular } from './toggle-on';
import { ToggleOnIconBold } from './toggle-on-bold';
import { ToggleOnIconFilled } from './toggle-on-filled';
import { ToggleOnIconFilltone } from './toggle-on-filltone';
import { ToggleOnIconLinetone } from './toggle-on-linetone';

export interface ToggleOnIconProps extends IconProps {
  variant?: IconVariant;
}

const ToggleOnIcon = memo(forwardRef<SVGSVGElement, ToggleOnIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ToggleOnIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ToggleOnIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ToggleOnIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ToggleOnIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ToggleOnIconRegular ref={ref} {...props} />;
  }
}));

ToggleOnIcon.displayName = 'ToggleOnIcon';

export { ToggleOnIcon };
