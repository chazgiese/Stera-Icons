import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxOffBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffBold = memo(
  forwardRef<SVGSVGElement, ChatBoxOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.8 1.8a1 1 0 0 1 1.4 0l14.36 14.34q.16.12.27.27l2.38 2.38a1 1 0 0 1-1.42 1.42l-2.22-2.22H15.3L10.8 21q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.49-1.97a5 5 0 0 1 .71-1.05L1.8 3.2a1 1 0 0 1 0-1.42m2.88 4.3a3 3 0 0 0-.35.54 3 3 0 0 0-.28 1.21C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03a3 3 0 0 0 1.62 1.62c.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16a1 1 0 0 1 1 1v2.13l4.45-2.96.12-.07.08-.04z" clipRule="evenodd" />
        <path fill="currentColor" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.49a5 5 0 0 1 2.19 2.18c.3.6.42 1.23.48 1.96q.07 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-.94 1.47 1 1 0 0 1-1.47-1.35 3 3 0 0 0 .56-.88c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 5 15.74 5 14.6 5H8.25a1 1 0 0 1-.02-2h6.37" />
    </IconBase>
  ))
);

ChatBoxOffBold.displayName = 'ChatBoxOffBold';

// Triple export pattern (lucide-react style)
export { ChatBoxOffBold, ChatBoxOffBold as ChatBoxOffBoldIcon, ChatBoxOffBold as SiChatBoxOffBold };
export default ChatBoxOffBold;
export type { ChatBoxOffBoldProps };
