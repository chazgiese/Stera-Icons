import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxDashedIcon as RegularChatBoxDashedIcon } from './chat-box-dashed';
import { ChatBoxDashedIconDuotone as ChatBoxDashedIconDuotone } from './chat-box-dashed-duotone';
import { ChatBoxDashedIconBold as ChatBoxDashedIconBold } from './chat-box-dashed-bold';
import { ChatBoxDashedIconBoldDuotone as ChatBoxDashedIconBoldDuotone } from './chat-box-dashed-bold-duotone';
import { ChatBoxDashedIconFill as ChatBoxDashedIconFill } from './chat-box-dashed-fill';
import { ChatBoxDashedIconFillDuotone as ChatBoxDashedIconFillDuotone } from './chat-box-dashed-fill-duotone';

export interface ChatBoxDashedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxDashedIcon = memo(forwardRef<SVGSVGElement, ChatBoxDashedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDashedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxDashedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxDashedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxDashedIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxDashedIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxDashedIcon ref={ref} {...props} />;
}));

ChatBoxDashedIcon.displayName = 'ChatBoxDashedIcon';

export { ChatBoxDashedIcon };
