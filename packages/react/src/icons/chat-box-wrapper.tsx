import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxIcon as ChatBoxIconRegular } from './chat-box';
import { ChatBoxIconBold } from './chat-box-bold';
import { ChatBoxIconFilled } from './chat-box-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChatBoxIconProps extends IconProps {
  variant?: IconVariant;
}

const ChatBoxIcon = memo(forwardRef<SVGSVGElement, ChatBoxIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChatBoxIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChatBoxIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChatBoxIconRegular ref={ref} {...props} />;
  }
}));

ChatBoxIcon.displayName = 'ChatBoxIcon';

export { ChatBoxIcon };
