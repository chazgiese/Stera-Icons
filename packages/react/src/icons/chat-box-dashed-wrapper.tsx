import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBoxDashedIcon as RegularChatBoxDashedIcon } from './chat-box-dashed';
import { ChatBoxDashedIconBold } from './chat-box-dashed-bold';
import { ChatBoxDashedIconFilled } from './chat-box-dashed-filled';
import { ChatBoxDashedIconFilltone } from './chat-box-dashed-filltone';
import { ChatBoxDashedIconLinetone } from './chat-box-dashed-linetone';

export interface ChatBoxDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxDashedIcon = memo(forwardRef<SVGSVGElement, ChatBoxDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxDashedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBoxDashedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBoxDashedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatBoxDashedIcon ref={ref} {...props} />;
  }
}));

ChatBoxDashedIcon.displayName = 'ChatBoxDashedIcon';

export { ChatBoxDashedIcon };
