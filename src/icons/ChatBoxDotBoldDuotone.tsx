import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxDotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dot-bold-duotone" {...props}>
      <path fill="currentColor" d="M13.22 3a1 1 0 0 1 0 2H9.4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03a3 3 0 0 0 1.62 1.62c.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16a1 1 0 0 1 1 1v2.13l4.45-2.96a1 1 0 0 1 .26-.13l.07-.01.02-.01h.06l.04-.02h.1c.95 0 1.6 0 2.12-.04.5-.03.8-.1 1.03-.19a3 3 0 0 0 1.62-1.62c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6a1 1 0 0 1 2 0v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.97 3.31A1.5 1.5 0 0 1 8 20.07V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3z" opacity={.4} />
        <path fill="currentColor" d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBoxDotBoldDuotone.displayName = 'ChatBoxDotBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxDotBoldDuotone, ChatBoxDotBoldDuotone as ChatBoxDotBoldDuotoneIcon, ChatBoxDotBoldDuotone as SiChatBoxDotBoldDuotone };
export default ChatBoxDotBoldDuotone;
export type { ChatBoxDotBoldDuotoneProps };
