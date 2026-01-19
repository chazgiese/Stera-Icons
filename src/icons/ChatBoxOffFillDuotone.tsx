import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-off-fill-duotone" {...props}>
      <path d="M17.57 18.98q-.85.02-1.97.02h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 .53-.8zM17.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.8q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.47 2.31L3.66 2.24q.5-.15 1.09-.2Q5.57 2 6.8 2z" opacity={0.4} />
        <path fill="currentColor" d="M1.3 1.3a1 1 0 0 1 1.4 0l19 19a1 1 0 0 1-1.4 1.4l-19-19a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChatBoxOffFillDuotone.displayName = 'ChatBoxOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxOffFillDuotone, ChatBoxOffFillDuotone as ChatBoxOffFillDuotoneIcon, ChatBoxOffFillDuotone as SiChatBoxOffFillDuotone };
export default ChatBoxOffFillDuotone;
export type { ChatBoxOffFillDuotoneProps };
