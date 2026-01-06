import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxTextIcon as RegularChatBoxTextIcon } from './chat-box-text';
import { ChatBoxTextIconDuotone as ChatBoxTextIconDuotone } from './chat-box-text-duotone';
import { ChatBoxTextIconBold as ChatBoxTextIconBold } from './chat-box-text-bold';
import { ChatBoxTextIconBoldDuotone as ChatBoxTextIconBoldDuotone } from './chat-box-text-bold-duotone';
import { ChatBoxTextIconFill as ChatBoxTextIconFill } from './chat-box-text-fill';
import { ChatBoxTextIconFillDuotone as ChatBoxTextIconFillDuotone } from './chat-box-text-fill-duotone';

export interface ChatBoxTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxTextIcon = memo(forwardRef<SVGSVGElement, ChatBoxTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxTextIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxTextIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxTextIcon ref={ref} {...props} />;
}));

ChatBoxTextIcon.displayName = 'ChatBoxTextIcon';

export { ChatBoxTextIcon };
