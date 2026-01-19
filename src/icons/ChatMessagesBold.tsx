import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatMessagesBoldProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesBold = memo(
  forwardRef<SVGSVGElement, ChatMessagesBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-messages-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3a5 5 0 0 1 5 5v1h1a5 5 0 0 1 5 5v6a1 1 0 0 1-1.45.9l-1.36-.69a2 2 0 0 0-.9-.21H12a5 5 0 0 1-5-5v-1H4.7a2 2 0 0 0-.89.21l-1.36.68A1 1 0 0 1 1 14V8a5 5 0 0 1 5-5zm0 8a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h7.3a4 4 0 0 1 1.7.38V14a3 3 0 0 0-3-3zM6 5a3 3 0 0 0-3 3v4.38A4 4 0 0 1 4.7 12h2.72q.14-.33.33-.63l.01-.02.18-.27.03-.04.41-.5.03-.02.05-.05.2-.18.02-.03q.4-.35.83-.6l.03-.02a5 5 0 0 1 .63-.3l.05-.01a5 5 0 0 1 1-.27h.04q.17-.04.35-.04h.03L12 9h3V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatMessagesBold.displayName = 'ChatMessagesBold';

// Triple export pattern (lucide-react style)
export { ChatMessagesBold, ChatMessagesBold as ChatMessagesBoldIcon, ChatMessagesBold as SiChatMessagesBold };
export default ChatMessagesBold;
export type { ChatMessagesBoldProps };
