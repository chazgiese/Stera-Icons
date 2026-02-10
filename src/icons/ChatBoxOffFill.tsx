import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxOffFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffFill = memo(
  forwardRef<SVGSVGElement, ChatBoxOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-off-fill" {...props}>
      <path fill="currentColor" d="M1.8 1.8a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4L16.56 18H15.3L10.8 21q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.49-1.97a5 5 0 0 1 .72-1.05L1.79 3.21a1 1 0 0 1 0-1.42M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.49a5 5 0 0 1 2.19 2.18c.3.6.42 1.23.48 1.96q.07 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-1.13 1.67L6.96 3.04Q7.95 3 9.4 3z" />
    </IconBase>
  ))
);

ChatBoxOffFill.displayName = 'ChatBoxOffFill';

// Triple export pattern (lucide-react style)
export { ChatBoxOffFill, ChatBoxOffFill as ChatBoxOffFillIcon, ChatBoxOffFill as SiChatBoxOffFill };
export default ChatBoxOffFill;
export type { ChatBoxOffFillProps };
