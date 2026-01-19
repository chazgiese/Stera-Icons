import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleCheckFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleCheckFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleCheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-check-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1m4.58 6.8a1 1 0 0 0-1.41 0l-4.69 4.68-1.56-2.08a1 1 0 1 0-1.6 1.2l1.7 2.26.29.36c.1.12.27.28.52.4a1.5 1.5 0 0 0 1.57-.25l.33-.32 4.85-4.84a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleCheckFill.displayName = 'ChatBubbleCheckFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleCheckFill, ChatBubbleCheckFill as ChatBubbleCheckFillIcon, ChatBubbleCheckFill as SiChatBubbleCheckFill };
export type { ChatBubbleCheckFillProps };
