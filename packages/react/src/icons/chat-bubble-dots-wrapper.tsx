import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleDotsIcon as ChatBubbleDotsIconRegular } from './chat-bubble-dots';
import { ChatBubbleDotsIconBold } from './chat-bubble-dots-bold';
import { ChatBubbleDotsIconFilled } from './chat-bubble-dots-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChatBubbleDotsIconRegular ref={ref} {...props} />;
  }
}));

ChatBubbleDotsIcon.displayName = 'ChatBubbleDotsIcon';

export { ChatBubbleDotsIcon };
