import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatMessagesIcon as RegularChatMessagesIcon } from './chat-messages';
import { ChatMessagesIconDuotone as ChatMessagesIconDuotone } from './chat-messages-duotone';
import { ChatMessagesIconBold as ChatMessagesIconBold } from './chat-messages-bold';
import { ChatMessagesIconBoldDuotone as ChatMessagesIconBoldDuotone } from './chat-messages-bold-duotone';
import { ChatMessagesIconFill as ChatMessagesIconFill } from './chat-messages-fill';
import { ChatMessagesIconFillDuotone as ChatMessagesIconFillDuotone } from './chat-messages-fill-duotone';

export interface ChatMessagesIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatMessagesIcon = memo(forwardRef<SVGSVGElement, ChatMessagesIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatMessagesIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatMessagesIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatMessagesIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatMessagesIconFill ref={ref} {...props} />;
  if (duotone) return <ChatMessagesIconDuotone ref={ref} {...props} />;
  return <RegularChatMessagesIcon ref={ref} {...props} />;
}));

ChatMessagesIcon.displayName = 'ChatMessagesIcon';

export { ChatMessagesIcon };
