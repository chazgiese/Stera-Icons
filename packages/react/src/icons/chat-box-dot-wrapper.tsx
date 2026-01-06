import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxDotIcon as RegularChatBoxDotIcon } from './chat-box-dot';
import { ChatBoxDotIconDuotone as ChatBoxDotIconDuotone } from './chat-box-dot-duotone';
import { ChatBoxDotIconBold as ChatBoxDotIconBold } from './chat-box-dot-bold';
import { ChatBoxDotIconBoldDuotone as ChatBoxDotIconBoldDuotone } from './chat-box-dot-bold-duotone';
import { ChatBoxDotIconFill as ChatBoxDotIconFill } from './chat-box-dot-fill';
import { ChatBoxDotIconFillDuotone as ChatBoxDotIconFillDuotone } from './chat-box-dot-fill-duotone';

export interface ChatBoxDotIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxDotIcon = memo(forwardRef<SVGSVGElement, ChatBoxDotIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDotIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxDotIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxDotIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxDotIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxDotIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxDotIcon ref={ref} {...props} />;
}));

ChatBoxDotIcon.displayName = 'ChatBoxDotIcon';

export { ChatBoxDotIcon };
