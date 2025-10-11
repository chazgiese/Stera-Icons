import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendHorizontalIcon as SendHorizontalIconRegular } from './send-horizontal';
import { SendHorizontalIconBold } from './send-horizontal-bold';
import { SendHorizontalIconFilled } from './send-horizontal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SendHorizontalIconProps extends IconProps {
  variant?: IconVariant;
}

const SendHorizontalIcon = memo(forwardRef<SVGSVGElement, SendHorizontalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SendHorizontalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SendHorizontalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SendHorizontalIconRegular ref={ref} {...props} />;
  }
}));

SendHorizontalIcon.displayName = 'SendHorizontalIcon';

export { SendHorizontalIcon };
