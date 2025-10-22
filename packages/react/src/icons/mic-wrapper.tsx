import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MicIcon as RegularMicIcon } from './mic';
import { MicIconBold } from './mic-bold';
import { MicIconFilled } from './mic-filled';
import { MicIconFilltone } from './mic-filltone';
import { MicIconLinetone } from './mic-linetone';

export interface MicIconProps extends IconProps {
  variant?: IconVariant;
}

const MicIcon = memo(forwardRef<SVGSVGElement, MicIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MicIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MicIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MicIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MicIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMicIcon ref={ref} {...props} />;
  }
}));

MicIcon.displayName = 'MicIcon';

export { MicIcon };
