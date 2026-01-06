import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxDotsIcon as RegularChatBoxDotsIcon } from './chat-box-dots';
import { ChatBoxDotsIconDuotone as ChatBoxDotsIconDuotone } from './chat-box-dots-duotone';
import { ChatBoxDotsIconBold as ChatBoxDotsIconBold } from './chat-box-dots-bold';
import { ChatBoxDotsIconBoldDuotone as ChatBoxDotsIconBoldDuotone } from './chat-box-dots-bold-duotone';
import { ChatBoxDotsIconFill as ChatBoxDotsIconFill } from './chat-box-dots-fill';
import { ChatBoxDotsIconFillDuotone as ChatBoxDotsIconFillDuotone } from './chat-box-dots-fill-duotone';

export interface ChatBoxDotsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxDotsIcon = memo(forwardRef<SVGSVGElement, ChatBoxDotsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDotsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxDotsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxDotsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxDotsIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxDotsIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxDotsIcon ref={ref} {...props} />;
}));

ChatBoxDotsIcon.displayName = 'ChatBoxDotsIcon';

export { ChatBoxDotsIcon };
