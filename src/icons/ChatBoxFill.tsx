import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxFill = memo(
  forwardRef<SVGSVGElement, ChatBoxFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-fill" {...props}>
      <path fill="currentColor" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-.83.06-2 .06l-4.98 3.31A1.5 1.5 0 0 1 8 20.07v-2.08q-.73 0-1.3-.05a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 12.25 2 10.6v-.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3z" />
    </IconBase>
  ))
);

ChatBoxFill.displayName = 'ChatBoxFill';

// Triple export pattern (lucide-react style)
export { ChatBoxFill, ChatBoxFill as ChatBoxFillIcon, ChatBoxFill as SiChatBoxFill };
export default ChatBoxFill;
export type { ChatBoxFillProps };
