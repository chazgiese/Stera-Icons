import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBubbleDotIcon as RegularChatBubbleDotIcon } from './chat-bubble-dot';
import { ChatBubbleDotIconBold } from './chat-bubble-dot-bold';
import { ChatBubbleDotIconFilled } from './chat-bubble-dot-filled';
import { ChatBubbleDotIconFilltone } from './chat-bubble-dot-filltone';
import { ChatBubbleDotIconLinetone } from './chat-bubble-dot-linetone';

export interface ChatBubbleDotIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBubbleDotIcon = memo(forwardRef<SVGSVGElement, ChatBubbleDotIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBubbleDotIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBubbleDotIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBubbleDotIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBubbleDotIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatBubbleDotIcon ref={ref} {...props} />;
  }
}));

ChatBubbleDotIcon.displayName = 'ChatBubbleDotIcon';

export { ChatBubbleDotIcon };
