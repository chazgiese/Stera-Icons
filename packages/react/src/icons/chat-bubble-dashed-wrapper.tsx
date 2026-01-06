import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleDashedIcon as RegularChatBubbleDashedIcon } from './chat-bubble-dashed';
import { ChatBubbleDashedIconDuotone as ChatBubbleDashedIconDuotone } from './chat-bubble-dashed-duotone';
import { ChatBubbleDashedIconBold as ChatBubbleDashedIconBold } from './chat-bubble-dashed-bold';
import { ChatBubbleDashedIconBoldDuotone as ChatBubbleDashedIconBoldDuotone } from './chat-bubble-dashed-bold-duotone';
import { ChatBubbleDashedIconFill as ChatBubbleDashedIconFill } from './chat-bubble-dashed-fill';
import { ChatBubbleDashedIconFillDuotone as ChatBubbleDashedIconFillDuotone } from './chat-bubble-dashed-fill-duotone';

export interface ChatBubbleDashedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleDashedIcon = memo(forwardRef<SVGSVGElement, ChatBubbleDashedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDashedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleDashedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDashedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleDashedIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleDashedIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleDashedIcon ref={ref} {...props} />;
}));

ChatBubbleDashedIcon.displayName = 'ChatBubbleDashedIcon';

export { ChatBubbleDashedIcon };
