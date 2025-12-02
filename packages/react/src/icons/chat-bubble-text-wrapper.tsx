import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBubbleTextIcon as RegularChatBubbleTextIcon } from './chat-bubble-text';
import { ChatBubbleTextIconBold } from './chat-bubble-text-bold';
import { ChatBubbleTextIconFilled } from './chat-bubble-text-filled';
import { ChatBubbleTextIconFilltone } from './chat-bubble-text-filltone';
import { ChatBubbleTextIconLinetone } from './chat-bubble-text-linetone';

export interface ChatBubbleTextIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBubbleTextIcon = memo(forwardRef<SVGSVGElement, ChatBubbleTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBubbleTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBubbleTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBubbleTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBubbleTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatBubbleTextIcon ref={ref} {...props} />;
  }
}));

ChatBubbleTextIcon.displayName = 'ChatBubbleTextIcon';

export { ChatBubbleTextIcon };
