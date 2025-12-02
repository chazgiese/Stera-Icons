import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBubbleDashedIcon as RegularChatBubbleDashedIcon } from './chat-bubble-dashed';
import { ChatBubbleDashedIconBold } from './chat-bubble-dashed-bold';
import { ChatBubbleDashedIconFilled } from './chat-bubble-dashed-filled';
import { ChatBubbleDashedIconFilltone } from './chat-bubble-dashed-filltone';
import { ChatBubbleDashedIconLinetone } from './chat-bubble-dashed-linetone';

export interface ChatBubbleDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBubbleDashedIcon = memo(forwardRef<SVGSVGElement, ChatBubbleDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBubbleDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBubbleDashedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBubbleDashedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBubbleDashedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatBubbleDashedIcon ref={ref} {...props} />;
  }
}));

ChatBubbleDashedIcon.displayName = 'ChatBubbleDashedIcon';

export { ChatBubbleDashedIcon };
