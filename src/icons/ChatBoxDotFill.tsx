import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDotFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotFill = memo(
  forwardRef<SVGSVGElement, ChatBoxDotFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dot-fill" {...props}>
      <path fill="currentColor" d="M14.17 3A5 5 0 0 0 22 9.07L22 10.4v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.5 3q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3z" />
        <path fill="currentColor" d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBoxDotFill.displayName = 'ChatBoxDotFill';

// Triple export pattern (lucide-react style)
export { ChatBoxDotFill, ChatBoxDotFill as ChatBoxDotFillIcon, ChatBoxDotFill as SiChatBoxDotFill };
export default ChatBoxDotFill;
export type { ChatBoxDotFillProps };
