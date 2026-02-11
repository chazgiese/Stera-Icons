import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxCheckFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxCheckFill = memo(
  forwardRef<SVGSVGElement, ChatBoxCheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-check-fill" {...props}>
      <path fillRule="evenodd" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.5 3q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3zm1.13 5.32a1 1 0 0 0-1.41-.05l-3.47 3.26-1.07-1.34a1 1 0 0 0-1.56 1.25l1.2 1.5q.13.18.28.34.15.18.5.37.48.2.98.06c.25-.06.43-.19.55-.28l.33-.3 3.62-3.4a1 1 0 0 0 .05-1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxCheckFill.displayName = 'ChatBoxCheckFill';

// Triple export pattern (lucide-react style)
export { ChatBoxCheckFill, ChatBoxCheckFill as ChatBoxCheckFillIcon, ChatBoxCheckFill as SiChatBoxCheckFill };
export default ChatBoxCheckFill;
export type { ChatBoxCheckFillProps };
