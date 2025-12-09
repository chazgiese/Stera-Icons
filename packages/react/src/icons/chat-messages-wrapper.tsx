import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatMessagesIcon as RegularChatMessagesIcon } from './chat-messages';
import { ChatMessagesIconBold } from './chat-messages-bold';
import { ChatMessagesIconFilled } from './chat-messages-filled';
import { ChatMessagesIconFilltone } from './chat-messages-filltone';
import { ChatMessagesIconLinetone } from './chat-messages-linetone';

export interface ChatMessagesIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatMessagesIcon = memo(forwardRef<SVGSVGElement, ChatMessagesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatMessagesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatMessagesIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatMessagesIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatMessagesIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatMessagesIcon ref={ref} {...props} />;
  }
}));

ChatMessagesIcon.displayName = 'ChatMessagesIcon';

export { ChatMessagesIcon };
