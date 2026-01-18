import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleOffIcon as RegularChatBubbleOffIcon } from './chat-bubble-off';
import { ChatBubbleOffIconDuotone as ChatBubbleOffIconDuotone } from './chat-bubble-off-duotone';
import { ChatBubbleOffIconBold as ChatBubbleOffIconBold } from './chat-bubble-off-bold';
import { ChatBubbleOffIconBoldDuotone as ChatBubbleOffIconBoldDuotone } from './chat-bubble-off-bold-duotone';
import { ChatBubbleOffIconFill as ChatBubbleOffIconFill } from './chat-bubble-off-fill';
import { ChatBubbleOffIconFillDuotone as ChatBubbleOffIconFillDuotone } from './chat-bubble-off-fill-duotone';

export interface ChatBubbleOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleOffIcon = memo(forwardRef<SVGSVGElement, ChatBubbleOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleOffIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleOffIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleOffIcon ref={ref} {...props} />;
}));

ChatBubbleOffIcon.displayName = 'ChatBubbleOffIcon';

export { ChatBubbleOffIcon };
