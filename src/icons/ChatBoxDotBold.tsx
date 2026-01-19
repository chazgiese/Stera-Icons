import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxDotBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotBold = memo(
  forwardRef<SVGSVGElement, ChatBoxDotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dot-bold" {...props}>
      <path fill="currentColor" d="M12.81 2a1 1 0 1 1 0 2H8.4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C3 7.47 3 8.26 3 9.4v2.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H9a1 1 0 0 1 1 1v2.13l4.45-2.96a1 1 0 0 1 .26-.13l.07-.01.02-.01h.06l.04-.02h.7c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-.82a1 1 0 0 1 2 0v.82q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-4.97 3.31A1.5 1.5 0 0 1 8 21.07V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 1.99 8.4 2z" />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChatBoxDotBold.displayName = 'ChatBoxDotBold';

// Triple export pattern (lucide-react style)
export { ChatBoxDotBold, ChatBoxDotBold as ChatBoxDotBoldIcon, ChatBoxDotBold as SiChatBoxDotBold };
export default ChatBoxDotBold;
export type { ChatBoxDotBoldProps };
