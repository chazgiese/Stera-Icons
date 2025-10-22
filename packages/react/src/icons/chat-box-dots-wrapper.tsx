import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBoxDotsIcon as ChatBoxDotsIconRegular } from './chat-box-dots';
import { ChatBoxDotsIconBold } from './chat-box-dots-bold';
import { ChatBoxDotsIconFilled } from './chat-box-dots-filled';
import { ChatBoxDotsIconFilltone } from './chat-box-dots-filltone';
import { ChatBoxDotsIconLinetone } from './chat-box-dots-linetone';

export interface ChatBoxDotsIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxDotsIcon = memo(forwardRef<SVGSVGElement, ChatBoxDotsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxDotsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxDotsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBoxDotsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBoxDotsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChatBoxDotsIconRegular ref={ref} {...props} />;
  }
}));

ChatBoxDotsIcon.displayName = 'ChatBoxDotsIcon';

export { ChatBoxDotsIcon };
