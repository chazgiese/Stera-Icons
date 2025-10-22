import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SendIcon as RegularSendIcon } from './send';
import { SendIconBold } from './send-bold';
import { SendIconFilled } from './send-filled';
import { SendIconFilltone } from './send-filltone';
import { SendIconLinetone } from './send-linetone';

export interface SendIconProps extends IconProps {
  variant?: IconVariant;
}

const SendIcon = memo(forwardRef<SVGSVGElement, SendIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SendIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SendIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SendIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SendIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSendIcon ref={ref} {...props} />;
  }
}));

SendIcon.displayName = 'SendIcon';

export { SendIcon };
