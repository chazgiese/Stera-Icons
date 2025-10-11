import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxDotsIcon as ChatBoxDotsIconRegular } from './chat-box-dots';
import { ChatBoxDotsIconBold } from './chat-box-dots-bold';
import { ChatBoxDotsIconFilled } from './chat-box-dots-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChatBoxDotsIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxDotsIcon = memo(forwardRef<SVGSVGElement, ChatBoxDotsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxDotsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxDotsIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChatBoxDotsIconRegular ref={ref} {...props} />;
  }
}));

ChatBoxDotsIcon.displayName = 'ChatBoxDotsIcon';

export { ChatBoxDotsIcon };
