import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleAlertIcon as RegularChatBubbleAlertIcon } from './chat-bubble-alert';
import { ChatBubbleAlertIconDuotone as ChatBubbleAlertIconDuotone } from './chat-bubble-alert-duotone';
import { ChatBubbleAlertIconBold as ChatBubbleAlertIconBold } from './chat-bubble-alert-bold';
import { ChatBubbleAlertIconBoldDuotone as ChatBubbleAlertIconBoldDuotone } from './chat-bubble-alert-bold-duotone';
import { ChatBubbleAlertIconFill as ChatBubbleAlertIconFill } from './chat-bubble-alert-fill';
import { ChatBubbleAlertIconFillDuotone as ChatBubbleAlertIconFillDuotone } from './chat-bubble-alert-fill-duotone';

export interface ChatBubbleAlertIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleAlertIcon = memo(forwardRef<SVGSVGElement, ChatBubbleAlertIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleAlertIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleAlertIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleAlertIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleAlertIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleAlertIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleAlertIcon ref={ref} {...props} />;
}));

ChatBubbleAlertIcon.displayName = 'ChatBubbleAlertIcon';

export { ChatBubbleAlertIcon };
