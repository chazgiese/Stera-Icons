import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendVerticalIcon as SendVerticalIconRegular } from './send-vertical';
import { SendVerticalIconBold } from './send-vertical-bold';
import { SendVerticalIconFilled } from './send-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SendVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const SendVerticalIcon = memo(forwardRef<SVGSVGElement, SendVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SendVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SendVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SendVerticalIconRegular ref={ref} {...props} />;
  }
}));

SendVerticalIcon.displayName = 'SendVerticalIcon';

export { SendVerticalIcon };
