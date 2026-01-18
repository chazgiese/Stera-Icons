import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxAlertIcon as RegularChatBoxAlertIcon } from './chat-box-alert';
import { ChatBoxAlertIconDuotone as ChatBoxAlertIconDuotone } from './chat-box-alert-duotone';
import { ChatBoxAlertIconBold as ChatBoxAlertIconBold } from './chat-box-alert-bold';
import { ChatBoxAlertIconBoldDuotone as ChatBoxAlertIconBoldDuotone } from './chat-box-alert-bold-duotone';
import { ChatBoxAlertIconFill as ChatBoxAlertIconFill } from './chat-box-alert-fill';
import { ChatBoxAlertIconFillDuotone as ChatBoxAlertIconFillDuotone } from './chat-box-alert-fill-duotone';

export interface ChatBoxAlertIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxAlertIcon = memo(forwardRef<SVGSVGElement, ChatBoxAlertIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxAlertIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxAlertIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxAlertIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxAlertIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxAlertIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxAlertIcon ref={ref} {...props} />;
}));

ChatBoxAlertIcon.displayName = 'ChatBoxAlertIcon';

export { ChatBoxAlertIcon };
