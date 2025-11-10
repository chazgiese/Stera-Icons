import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CoolSIcon as RegularCoolSIcon } from './cool-s';
import { CoolSIconBold } from './cool-s-bold';
import { CoolSIconFilled } from './cool-s-filled';
import { CoolSIconFilltone } from './cool-s-filltone';
import { CoolSIconLinetone } from './cool-s-linetone';

export interface CoolSIconProps extends IconProps {
  variant?: IconVariant;
}

const CoolSIcon = memo(forwardRef<SVGSVGElement, CoolSIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CoolSIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CoolSIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CoolSIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CoolSIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCoolSIcon ref={ref} {...props} />;
  }
}));

CoolSIcon.displayName = 'CoolSIcon';

export { CoolSIcon };
