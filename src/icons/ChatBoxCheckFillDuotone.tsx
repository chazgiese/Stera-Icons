import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-check-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.8q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2zm-.62 5.3a1 1 0 0 0-1.41 0l-4.69 4.68L8.92 9.9a1 1 0 0 0-1.6 1.2l1.7 2.26.29.36c.1.12.27.28.52.4q.49.2 1 .06c.26-.07.45-.2.57-.31l.33-.32 4.85-4.84a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.17 7.3a1 1 0 0 1 1.41 1.4l-4.85 4.85q-.15.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.24-.1-.4-.27-.51-.39q-.15-.17-.29-.36l-1.7-2.26a1 1 0 1 1 1.6-1.2l1.56 2.08z" />
    </IconBase>
  ))
);

ChatBoxCheckFillDuotone.displayName = 'ChatBoxCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxCheckFillDuotone, ChatBoxCheckFillDuotone as ChatBoxCheckFillDuotoneIcon, ChatBoxCheckFillDuotone as SiChatBoxCheckFillDuotone };
export type { ChatBoxCheckFillDuotoneProps };
