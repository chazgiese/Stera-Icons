import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicroscopeIcon as MicroscopeIconRegular } from './microscope';
import { MicroscopeIconBold } from './microscope-bold';
import { MicroscopeIconFilled } from './microscope-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MicroscopeIconRegular ref={ref} {...props} />;
  }
}));

MicroscopeIcon.displayName = 'MicroscopeIcon';

export { MicroscopeIcon };
