import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleTextFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleTextFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-text-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m-3.5 9.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2zm0-3.5a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleTextFill.displayName = 'ChatBubbleTextFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleTextFill, ChatBubbleTextFill as ChatBubbleTextFillIcon, ChatBubbleTextFill as SiChatBubbleTextFill };
export default ChatBubbleTextFill;
export type { ChatBubbleTextFillProps };
