import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBoxIcon as ChatBoxIconRegular } from './chat-box';
import { ChatBoxIconBold } from './chat-box-bold';
import { ChatBoxIconFilled } from './chat-box-filled';
import { ChatBoxIconFilltone } from './chat-box-filltone';
import { ChatBoxIconLinetone } from './chat-box-linetone';

export interface ChatBoxIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxIcon = memo(forwardRef<SVGSVGElement, ChatBoxIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBoxIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBoxIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChatBoxIconRegular ref={ref} {...props} />;
  }
}));

ChatBoxIcon.displayName = 'ChatBoxIcon';

export { ChatBoxIcon };
