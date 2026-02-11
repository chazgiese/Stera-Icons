import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleCheckFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleCheckFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleCheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-check-fill" {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m4.2 6.04a1 1 0 0 0-1.4 0l-4.16 4.18-1.34-1.8a1 1 0 0 0-1.6 1.2l1.48 1.98q.13.19.28.36c.1.12.27.29.52.4q.5.2 1.01.07c.26-.07.45-.21.57-.32l.34-.31 4.3-4.34a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleCheckFill.displayName = 'ChatBubbleCheckFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleCheckFill, ChatBubbleCheckFill as ChatBubbleCheckFillIcon, ChatBubbleCheckFill as SiChatBubbleCheckFill };
export default ChatBubbleCheckFill;
export type { ChatBubbleCheckFillProps };
