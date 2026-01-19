import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxOffBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffBold = memo(
  forwardRef<SVGSVGElement, ChatBoxOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.3 1.3a1 1 0 0 1 1.4 0l19 19a1 1 0 0 1-1.4 1.4l-2.73-2.72q-.85.02-1.97.02h-.3l-4.97 3.31A1.5 1.5 0 0 1 8 21.07V19q-1.37.02-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 .72-1.05L1.3 2.7a1 1 0 0 1 0-1.42m2.38 3.8a3 3 0 0 0-.35.54 3 3 0 0 0-.28 1.21C3 7.47 3 8.26 3 9.4v2.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H9a1 1 0 0 1 1 1v2.13l4.45-2.96.12-.07A1 1 0 0 1 15 17h.59z" clipRule="evenodd" />
        <path fill="currentColor" d="M15.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.2c.3.58.42 1.22.48 1.95q.08 1.06.06 2.71v2.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-.78 1.11 1 1 0 1 1-1.47-1.35 3 3 0 0 0 .46-.67c.14-.26.23-.6.28-1.21.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C17.53 4 16.74 4 15.6 4H7.25a1 1 0 0 1-.02-2h8.37" />
    </IconBase>
  ))
);

ChatBoxOffBold.displayName = 'ChatBoxOffBold';

// Triple export pattern (lucide-react style)
export { ChatBoxOffBold, ChatBoxOffBold as ChatBoxOffBoldIcon, ChatBoxOffBold as SiChatBoxOffBold };
export type { ChatBoxOffBoldProps };
