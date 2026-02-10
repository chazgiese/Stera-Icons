import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxCheckBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxCheckBold = memo(
  forwardRef<SVGSVGElement, ChatBoxCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-check-bold" {...props}>
      <path fill="currentColor" d="M14.32 8.27a1 1 0 1 1 1.36 1.46l-3.62 3.4-.33.3a1.5 1.5 0 0 1-2.03-.15q-.15-.16-.28-.33l-1.2-1.5a1 1 0 0 1 1.56-1.26l1.07 1.34z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.97 3.31A1.5 1.5 0 0 1 8 20.07V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3zM9.4 5c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03a3 3 0 0 0 1.62 1.62c.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16a1 1 0 0 1 1 1v2.13l4.45-2.96A1 1 0 0 1 15 16c.95 0 1.6 0 2.12-.04.5-.03.8-.1 1.03-.19a3 3 0 0 0 1.62-1.62c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 5 15.74 5 14.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxCheckBold.displayName = 'ChatBoxCheckBold';

// Triple export pattern (lucide-react style)
export { ChatBoxCheckBold, ChatBoxCheckBold as ChatBoxCheckBoldIcon, ChatBoxCheckBold as SiChatBoxCheckBold };
export default ChatBoxCheckBold;
export type { ChatBoxCheckBoldProps };
