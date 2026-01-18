import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxCheckIcon as RegularChatBoxCheckIcon } from './chat-box-check';
import { ChatBoxCheckIconDuotone as ChatBoxCheckIconDuotone } from './chat-box-check-duotone';
import { ChatBoxCheckIconBold as ChatBoxCheckIconBold } from './chat-box-check-bold';
import { ChatBoxCheckIconBoldDuotone as ChatBoxCheckIconBoldDuotone } from './chat-box-check-bold-duotone';
import { ChatBoxCheckIconFill as ChatBoxCheckIconFill } from './chat-box-check-fill';
import { ChatBoxCheckIconFillDuotone as ChatBoxCheckIconFillDuotone } from './chat-box-check-fill-duotone';

export interface ChatBoxCheckIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxCheckIcon = memo(forwardRef<SVGSVGElement, ChatBoxCheckIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxCheckIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxCheckIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxCheckIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxCheckIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxCheckIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxCheckIcon ref={ref} {...props} />;
}));

ChatBoxCheckIcon.displayName = 'ChatBoxCheckIcon';

export { ChatBoxCheckIcon };
