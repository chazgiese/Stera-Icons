import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxIcon as RegularChatBoxIcon } from './chat-box';
import { ChatBoxIconDuotone as ChatBoxIconDuotone } from './chat-box-duotone';
import { ChatBoxIconBold as ChatBoxIconBold } from './chat-box-bold';
import { ChatBoxIconBoldDuotone as ChatBoxIconBoldDuotone } from './chat-box-bold-duotone';
import { ChatBoxIconFill as ChatBoxIconFill } from './chat-box-fill';
import { ChatBoxIconFillDuotone as ChatBoxIconFillDuotone } from './chat-box-fill-duotone';

export interface ChatBoxIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxIcon = memo(forwardRef<SVGSVGElement, ChatBoxIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxIcon ref={ref} {...props} />;
}));

ChatBoxIcon.displayName = 'ChatBoxIcon';

export { ChatBoxIcon };
