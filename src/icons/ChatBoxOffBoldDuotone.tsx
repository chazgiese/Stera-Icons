import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-off-bold-duotone" {...props}>
      <path d="M4.68 6.1a3 3 0 0 0-.35.54 3 3 0 0 0-.28 1.21C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03a3 3 0 0 0 1.62 1.62c.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16a1 1 0 0 1 1 1v2.13l4.45-2.96.12-.07.08-.04L16.57 18H15.3L10.8 21q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 .72-1.05zM14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-.94 1.47 1 1 0 0 1-1.47-1.35 3 3 0 0 0 .56-.88c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 5 15.74 5 14.6 5H8.25a1 1 0 0 1-.02-2h6.37" opacity={0.4} />
        <path fill="currentColor" d="M1.8 1.8a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChatBoxOffBoldDuotone.displayName = 'ChatBoxOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxOffBoldDuotone, ChatBoxOffBoldDuotone as ChatBoxOffBoldDuotoneIcon, ChatBoxOffBoldDuotone as SiChatBoxOffBoldDuotone };
export default ChatBoxOffBoldDuotone;
export type { ChatBoxOffBoldDuotoneProps };
