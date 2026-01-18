import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleCheckIcon as RegularChatBubbleCheckIcon } from './chat-bubble-check';
import { ChatBubbleCheckIconDuotone as ChatBubbleCheckIconDuotone } from './chat-bubble-check-duotone';
import { ChatBubbleCheckIconBold as ChatBubbleCheckIconBold } from './chat-bubble-check-bold';
import { ChatBubbleCheckIconBoldDuotone as ChatBubbleCheckIconBoldDuotone } from './chat-bubble-check-bold-duotone';
import { ChatBubbleCheckIconFill as ChatBubbleCheckIconFill } from './chat-bubble-check-fill';
import { ChatBubbleCheckIconFillDuotone as ChatBubbleCheckIconFillDuotone } from './chat-bubble-check-fill-duotone';

export interface ChatBubbleCheckIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleCheckIcon = memo(forwardRef<SVGSVGElement, ChatBubbleCheckIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleCheckIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleCheckIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleCheckIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleCheckIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleCheckIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleCheckIcon ref={ref} {...props} />;
}));

ChatBubbleCheckIcon.displayName = 'ChatBubbleCheckIcon';

export { ChatBubbleCheckIcon };
