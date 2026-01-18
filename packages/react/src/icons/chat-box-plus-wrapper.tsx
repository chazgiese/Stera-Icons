import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxPlusIcon as RegularChatBoxPlusIcon } from './chat-box-plus';
import { ChatBoxPlusIconDuotone as ChatBoxPlusIconDuotone } from './chat-box-plus-duotone';
import { ChatBoxPlusIconBold as ChatBoxPlusIconBold } from './chat-box-plus-bold';
import { ChatBoxPlusIconBoldDuotone as ChatBoxPlusIconBoldDuotone } from './chat-box-plus-bold-duotone';
import { ChatBoxPlusIconFill as ChatBoxPlusIconFill } from './chat-box-plus-fill';
import { ChatBoxPlusIconFillDuotone as ChatBoxPlusIconFillDuotone } from './chat-box-plus-fill-duotone';

export interface ChatBoxPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxPlusIcon = memo(forwardRef<SVGSVGElement, ChatBoxPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxPlusIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxPlusIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxPlusIcon ref={ref} {...props} />;
}));

ChatBoxPlusIcon.displayName = 'ChatBoxPlusIcon';

export { ChatBoxPlusIcon };
