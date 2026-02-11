import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-off-fill-duotone" {...props}>
      <path d="M16.57 17.99H15.3L10.8 21q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 .72-1.05zM14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65A5 5 0 0 1 19 17.58L4.89 3.48a5 5 0 0 1 1.8-.42Q7.75 2.99 9.4 3z" opacity={0.4} />
        <path d="M1.8 1.8a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChatBoxOffFillDuotone.displayName = 'ChatBoxOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxOffFillDuotone, ChatBoxOffFillDuotone as ChatBoxOffFillDuotoneIcon, ChatBoxOffFillDuotone as SiChatBoxOffFillDuotone };
export default ChatBoxOffFillDuotone;
export type { ChatBoxOffFillDuotoneProps };
