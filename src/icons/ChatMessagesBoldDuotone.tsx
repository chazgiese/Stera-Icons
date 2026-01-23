import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatMessagesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatMessagesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-messages-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 3a5 5 0 0 1 5 5v1h-2V8a3 3 0 0 0-3-3H5.85A3 3 0 0 0 3 8v4.38A4 4 0 0 1 4.7 12h2.72A5 5 0 0 0 7 14H4.7a2 2 0 0 0-.89.21l-1.36.68A1 1 0 0 1 1 14V8a5 5 0 0 1 4.74-5H12" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.26 9A5 5 0 0 1 23 14v6a1 1 0 0 1-1.45.9l-1.36-.69a2 2 0 0 0-.9-.21H12a5 5 0 0 1-5-5v-1a5 5 0 0 1 5-5h6.26M12 11a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h7.3a4 4 0 0 1 1.7.38V14a3 3 0 0 0-2.85-3H12" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatMessagesBoldDuotone.displayName = 'ChatMessagesBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatMessagesBoldDuotone, ChatMessagesBoldDuotone as ChatMessagesBoldDuotoneIcon, ChatMessagesBoldDuotone as SiChatMessagesBoldDuotone };
export default ChatMessagesBoldDuotone;
export type { ChatMessagesBoldDuotoneProps };
