import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatMessagesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatMessagesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-messages-duotone" {...props}>
      <path fill="currentColor" d="M12 3.25A4.75 4.75 0 0 1 16.75 8v1.25h-1.51l.01-.25V8c0-1.8-1.46-3.25-3.25-3.25H6A3.25 3.25 0 0 0 2.75 8v4.79l.28-.14q.8-.4 1.68-.4h2.87q-.28.7-.32 1.5H4.7q-.54 0-1 .24l-1.38.68A.75.75 0 0 1 1.25 14V8A4.75 4.75 0 0 1 6 3.25z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18 9.25A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.09.67L20.3 20a2 2 0 0 0-1-.24H12A4.75 4.75 0 0 1 7.25 15v-1A4.75 4.75 0 0 1 12 9.25zm-6 1.5A3.25 3.25 0 0 0 8.75 14v1c0 1.8 1.46 3.25 3.25 3.25h7.3q.87 0 1.67.4l.28.14V14c0-1.8-1.46-3.25-3.25-3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatMessagesRegularDuotone.displayName = 'ChatMessagesRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatMessagesRegularDuotone, ChatMessagesRegularDuotone as ChatMessagesRegularDuotoneIcon, ChatMessagesRegularDuotone as SiChatMessagesRegularDuotone };
export type { ChatMessagesRegularDuotoneProps };
