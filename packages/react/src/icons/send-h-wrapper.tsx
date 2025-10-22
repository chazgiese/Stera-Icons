import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SendHIcon as SendHIconRegular } from './send-h';
import { SendHIconBold } from './send-h-bold';
import { SendHIconFilled } from './send-h-filled';
import { SendHIconFilltone } from './send-h-filltone';
import { SendHIconLinetone } from './send-h-linetone';

export interface SendHIconProps extends IconProps {
  variant?: IconVariant;
}

const SendHIcon = memo(forwardRef<SVGSVGElement, SendHIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SendHIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SendHIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SendHIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SendHIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SendHIconRegular ref={ref} {...props} />;
  }
}));

SendHIcon.displayName = 'SendHIcon';

export { SendHIcon };
