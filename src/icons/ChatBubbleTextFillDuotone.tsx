import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-text-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1M8 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 12a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ChatBubbleTextFillDuotone.displayName = 'ChatBubbleTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleTextFillDuotone, ChatBubbleTextFillDuotone as ChatBubbleTextFillDuotoneIcon, ChatBubbleTextFillDuotone as SiChatBubbleTextFillDuotone };
export default ChatBubbleTextFillDuotone;
export type { ChatBubbleTextFillDuotoneProps };
