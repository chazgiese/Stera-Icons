import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MicroscopeIcon as RegularMicroscopeIcon } from './microscope';
import { MicroscopeIconBold } from './microscope-bold';
import { MicroscopeIconFilled } from './microscope-filled';
import { MicroscopeIconFilltone } from './microscope-filltone';
import { MicroscopeIconLinetone } from './microscope-linetone';

export interface MicroscopeIconProps extends IconProps {
  variant?: IconVariant;
}

const MicroscopeIcon = memo(forwardRef<SVGSVGElement, MicroscopeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MicroscopeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MicroscopeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MicroscopeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MicroscopeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMicroscopeIcon ref={ref} {...props} />;
  }
}));

MicroscopeIcon.displayName = 'MicroscopeIcon';

export { MicroscopeIcon };
