import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxOffIcon as RegularChatBoxOffIcon } from './chat-box-off';
import { ChatBoxOffIconDuotone as ChatBoxOffIconDuotone } from './chat-box-off-duotone';
import { ChatBoxOffIconBold as ChatBoxOffIconBold } from './chat-box-off-bold';
import { ChatBoxOffIconBoldDuotone as ChatBoxOffIconBoldDuotone } from './chat-box-off-bold-duotone';
import { ChatBoxOffIconFill as ChatBoxOffIconFill } from './chat-box-off-fill';
import { ChatBoxOffIconFillDuotone as ChatBoxOffIconFillDuotone } from './chat-box-off-fill-duotone';

export interface ChatBoxOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxOffIcon = memo(forwardRef<SVGSVGElement, ChatBoxOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxOffIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxOffIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxOffIcon ref={ref} {...props} />;
}));

ChatBoxOffIcon.displayName = 'ChatBoxOffIcon';

export { ChatBoxOffIcon };
