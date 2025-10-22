import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SendVIcon as SendVIconRegular } from './send-v';
import { SendVIconBold } from './send-v-bold';
import { SendVIconFilled } from './send-v-filled';
import { SendVIconFilltone } from './send-v-filltone';
import { SendVIconLinetone } from './send-v-linetone';

export interface SendVIconProps extends IconProps {
  variant?: IconVariant;
}

const SendVIcon = memo(forwardRef<SVGSVGElement, SendVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SendVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SendVIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SendVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SendVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SendVIconRegular ref={ref} {...props} />;
  }
}));

SendVIcon.displayName = 'SendVIcon';

export { SendVIcon };
