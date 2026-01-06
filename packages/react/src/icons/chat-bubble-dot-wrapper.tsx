import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleDotIcon as RegularChatBubbleDotIcon } from './chat-bubble-dot';
import { ChatBubbleDotIconDuotone as ChatBubbleDotIconDuotone } from './chat-bubble-dot-duotone';
import { ChatBubbleDotIconBold as ChatBubbleDotIconBold } from './chat-bubble-dot-bold';
import { ChatBubbleDotIconBoldDuotone as ChatBubbleDotIconBoldDuotone } from './chat-bubble-dot-bold-duotone';
import { ChatBubbleDotIconFill as ChatBubbleDotIconFill } from './chat-bubble-dot-fill';
import { ChatBubbleDotIconFillDuotone as ChatBubbleDotIconFillDuotone } from './chat-bubble-dot-fill-duotone';

export interface ChatBubbleDotIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleDotIcon = memo(forwardRef<SVGSVGElement, ChatBubbleDotIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDotIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleDotIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDotIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleDotIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleDotIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleDotIcon ref={ref} {...props} />;
}));

ChatBubbleDotIcon.displayName = 'ChatBubbleDotIcon';

export { ChatBubbleDotIcon };
