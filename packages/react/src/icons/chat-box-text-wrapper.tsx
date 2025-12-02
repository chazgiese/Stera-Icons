import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChatBoxTextIcon as RegularChatBoxTextIcon } from './chat-box-text';
import { ChatBoxTextIconBold } from './chat-box-text-bold';
import { ChatBoxTextIconFilled } from './chat-box-text-filled';
import { ChatBoxTextIconFilltone } from './chat-box-text-filltone';
import { ChatBoxTextIconLinetone } from './chat-box-text-linetone';

export interface ChatBoxTextIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxTextIcon = memo(forwardRef<SVGSVGElement, ChatBoxTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChatBoxTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChatBoxTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChatBoxTextIcon ref={ref} {...props} />;
  }
}));

ChatBoxTextIcon.displayName = 'ChatBoxTextIcon';

export { ChatBoxTextIcon };
