import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleIcon as ChatBubbleIconRegular } from './chat-bubble';
import { ChatBubbleIconBold } from './chat-bubble-bold';
import { ChatBubbleIconFilled } from './chat-bubble-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChatBubbleIconRegular ref={ref} {...props} />;
  }
}));

ChatBubbleIcon.displayName = 'ChatBubbleIcon';

export { ChatBubbleIcon };
