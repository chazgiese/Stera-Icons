import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleIcon as RegularChatBubbleIcon } from './chat-bubble';
import { ChatBubbleIconDuotone as ChatBubbleIconDuotone } from './chat-bubble-duotone';
import { ChatBubbleIconBold as ChatBubbleIconBold } from './chat-bubble-bold';
import { ChatBubbleIconBoldDuotone as ChatBubbleIconBoldDuotone } from './chat-bubble-bold-duotone';
import { ChatBubbleIconFill as ChatBubbleIconFill } from './chat-bubble-fill';
import { ChatBubbleIconFillDuotone as ChatBubbleIconFillDuotone } from './chat-bubble-fill-duotone';

export interface ChatBubbleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleIcon = memo(forwardRef<SVGSVGElement, ChatBubbleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleIcon ref={ref} {...props} />;
}));

ChatBubbleIcon.displayName = 'ChatBubbleIcon';

export { ChatBubbleIcon };
