import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleTextIcon as RegularChatBubbleTextIcon } from './chat-bubble-text';
import { ChatBubbleTextIconDuotone as ChatBubbleTextIconDuotone } from './chat-bubble-text-duotone';
import { ChatBubbleTextIconBold as ChatBubbleTextIconBold } from './chat-bubble-text-bold';
import { ChatBubbleTextIconBoldDuotone as ChatBubbleTextIconBoldDuotone } from './chat-bubble-text-bold-duotone';
import { ChatBubbleTextIconFill as ChatBubbleTextIconFill } from './chat-bubble-text-fill';
import { ChatBubbleTextIconFillDuotone as ChatBubbleTextIconFillDuotone } from './chat-bubble-text-fill-duotone';

export interface ChatBubbleTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleTextIcon = memo(forwardRef<SVGSVGElement, ChatBubbleTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleTextIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleTextIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleTextIcon ref={ref} {...props} />;
}));

ChatBubbleTextIcon.displayName = 'ChatBubbleTextIcon';

export { ChatBubbleTextIcon };
