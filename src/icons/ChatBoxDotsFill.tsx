import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxDotsFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotsFill = memo(
  forwardRef<SVGSVGElement, ChatBoxDotsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dots-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.8q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2zM7.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxDotsFill.displayName = 'ChatBoxDotsFill';

// Triple export pattern (lucide-react style)
export { ChatBoxDotsFill, ChatBoxDotsFill as ChatBoxDotsFillIcon, ChatBoxDotsFill as SiChatBoxDotsFill };
export default ChatBoxDotsFill;
export type { ChatBoxDotsFillProps };
