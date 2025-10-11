import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendIcon as SendIconRegular } from './send';
import { SendIconBold } from './send-bold';
import { SendIconFilled } from './send-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SendIconRegular ref={ref} {...props} />;
  }
}));

SendIcon.displayName = 'SendIcon';

export { SendIcon };
