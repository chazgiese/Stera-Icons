import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-fill" {...props}>
      <path fill="currentColor" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9" />
    </IconBase>
  ))
);

ChatBubbleFill.displayName = 'ChatBubbleFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleFill, ChatBubbleFill as ChatBubbleFillIcon, ChatBubbleFill as SiChatBubbleFill };
export default ChatBubbleFill;
export type { ChatBubbleFillProps };
