import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-plus-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.5 3q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3zM12 6.5a1 1 0 0 0-1 1v2H9a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChatBoxPlusFillDuotone.displayName = 'ChatBoxPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxPlusFillDuotone, ChatBoxPlusFillDuotone as ChatBoxPlusFillDuotoneIcon, ChatBoxPlusFillDuotone as SiChatBoxPlusFillDuotone };
export default ChatBoxPlusFillDuotone;
export type { ChatBoxPlusFillDuotoneProps };
