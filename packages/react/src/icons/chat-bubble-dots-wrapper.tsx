import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBubbleDotsIcon as ChatBubbleDotsIconRegular } from './chat-bubble-dots';
import { ChatBubbleDotsIconBold } from './chat-bubble-dots-bold';
import { ChatBubbleDotsIconFilled } from './chat-bubble-dots-filled';
import { ChatBubbleDotsIconFilltone } from './chat-bubble-dots-filltone';
import { ChatBubbleDotsIconLinetone } from './chat-bubble-dots-linetone';

export interface ChatBubbleDotsIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBubbleDotsIcon = memo(forwardRef<SVGSVGElement, ChatBubbleDotsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBubbleDotsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBubbleDotsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBubbleDotsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBubbleDotsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChatBubbleDotsIconRegular ref={ref} {...props} />;
  }
}));

ChatBubbleDotsIcon.displayName = 'ChatBubbleDotsIcon';

export { ChatBubbleDotsIcon };
