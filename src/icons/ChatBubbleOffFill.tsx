import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-fill" {...props}>
      <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 1 1-1.4 1.4l-2.06-2.04a10.8 10.8 0 0 1-7.48 1.11L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-2.1.78-4 2.08-5.5L2.3 3.7a1 1 0 0 1 0-1.4M12 2c5.4 0 10 3.92 10 9 0 1.97-.7 3.77-1.86 5.23L7.08 3.17A11 11 0 0 1 12 2" />
    </IconBase>
  ))
);

ChatBubbleOffFill.displayName = 'ChatBubbleOffFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffFill, ChatBubbleOffFill as ChatBubbleOffFillIcon, ChatBubbleOffFill as SiChatBubbleOffFill };
export default ChatBubbleOffFill;
export type { ChatBubbleOffFillProps };
