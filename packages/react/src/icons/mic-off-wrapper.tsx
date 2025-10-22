import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MicOffIcon as MicOffIconRegular } from './mic-off';
import { MicOffIconBold } from './mic-off-bold';
import { MicOffIconFilled } from './mic-off-filled';
import { MicOffIconFilltone } from './mic-off-filltone';
import { MicOffIconLinetone } from './mic-off-linetone';

export interface MicOffIconProps extends IconProps {
  variant?: IconVariant;
}

const MicOffIcon = memo(forwardRef<SVGSVGElement, MicOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MicOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MicOffIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MicOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MicOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MicOffIconRegular ref={ref} {...props} />;
  }
}));

MicOffIcon.displayName = 'MicOffIcon';

export { MicOffIcon };
