import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubblePlusIcon as RegularChatBubblePlusIcon } from './chat-bubble-plus';
import { ChatBubblePlusIconDuotone as ChatBubblePlusIconDuotone } from './chat-bubble-plus-duotone';
import { ChatBubblePlusIconBold as ChatBubblePlusIconBold } from './chat-bubble-plus-bold';
import { ChatBubblePlusIconBoldDuotone as ChatBubblePlusIconBoldDuotone } from './chat-bubble-plus-bold-duotone';
import { ChatBubblePlusIconFill as ChatBubblePlusIconFill } from './chat-bubble-plus-fill';
import { ChatBubblePlusIconFillDuotone as ChatBubblePlusIconFillDuotone } from './chat-bubble-plus-fill-duotone';

export interface ChatBubblePlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubblePlusIcon = memo(forwardRef<SVGSVGElement, ChatBubblePlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubblePlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubblePlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubblePlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubblePlusIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubblePlusIconDuotone ref={ref} {...props} />;
  return <RegularChatBubblePlusIcon ref={ref} {...props} />;
}));

ChatBubblePlusIcon.displayName = 'ChatBubblePlusIcon';

export { ChatBubblePlusIcon };
