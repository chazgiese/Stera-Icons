import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-fill" {...props}>
      <path fill="currentColor" d="M16.4 19.94a12 12 0 0 1-7.7.38l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08a9.07 9.07 0 0 1-.28-10.23zM1.3 1.3a1 1 0 0 1 1.4 0l19 19a1 1 0 1 1-1.4 1.4l-19-19a1 1 0 0 1 0-1.4M12 1c5.96 0 11 4.32 11 9.89 0 2.36-.9 4.5-2.4 6.17L6.09 2.56A12 12 0 0 1 12 1" />
    </IconBase>
  ))
);

ChatBubbleOffFill.displayName = 'ChatBubbleOffFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffFill, ChatBubbleOffFill as ChatBubbleOffFillIcon, ChatBubbleOffFill as SiChatBubbleOffFill };
export default ChatBubbleOffFill;
export type { ChatBubbleOffFillProps };
