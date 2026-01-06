import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleDotsIcon as RegularChatBubbleDotsIcon } from './chat-bubble-dots';
import { ChatBubbleDotsIconDuotone as ChatBubbleDotsIconDuotone } from './chat-bubble-dots-duotone';
import { ChatBubbleDotsIconBold as ChatBubbleDotsIconBold } from './chat-bubble-dots-bold';
import { ChatBubbleDotsIconBoldDuotone as ChatBubbleDotsIconBoldDuotone } from './chat-bubble-dots-bold-duotone';
import { ChatBubbleDotsIconFill as ChatBubbleDotsIconFill } from './chat-bubble-dots-fill';
import { ChatBubbleDotsIconFillDuotone as ChatBubbleDotsIconFillDuotone } from './chat-bubble-dots-fill-duotone';

export interface ChatBubbleDotsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleDotsIcon = memo(forwardRef<SVGSVGElement, ChatBubbleDotsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDotsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleDotsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDotsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleDotsIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleDotsIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleDotsIcon ref={ref} {...props} />;
}));

ChatBubbleDotsIcon.displayName = 'ChatBubbleDotsIcon';

export { ChatBubbleDotsIcon };
