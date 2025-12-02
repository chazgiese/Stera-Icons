import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBoxDotIcon as RegularChatBoxDotIcon } from './chat-box-dot';
import { ChatBoxDotIconBold } from './chat-box-dot-bold';
import { ChatBoxDotIconFilled } from './chat-box-dot-filled';
import { ChatBoxDotIconFilltone } from './chat-box-dot-filltone';
import { ChatBoxDotIconLinetone } from './chat-box-dot-linetone';

export interface ChatBoxDotIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxDotIcon = memo(forwardRef<SVGSVGElement, ChatBoxDotIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxDotIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxDotIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBoxDotIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBoxDotIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatBoxDotIcon ref={ref} {...props} />;
  }
}));

ChatBoxDotIcon.displayName = 'ChatBoxDotIcon';

export { ChatBoxDotIcon };
