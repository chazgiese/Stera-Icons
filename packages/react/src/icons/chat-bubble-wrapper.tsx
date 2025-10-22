import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBubbleIcon as ChatBubbleIconRegular } from './chat-bubble';
import { ChatBubbleIconBold } from './chat-bubble-bold';
import { ChatBubbleIconFilled } from './chat-bubble-filled';
import { ChatBubbleIconFilltone } from './chat-bubble-filltone';
import { ChatBubbleIconLinetone } from './chat-bubble-linetone';

export interface ChatBubbleIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBubbleIcon = memo(forwardRef<SVGSVGElement, ChatBubbleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBubbleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBubbleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBubbleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBubbleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChatBubbleIconRegular ref={ref} {...props} />;
  }
}));

ChatBubbleIcon.displayName = 'ChatBubbleIcon';

export { ChatBubbleIcon };
