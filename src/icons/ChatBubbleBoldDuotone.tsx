import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l.35-.17a1 1 0 0 0-.14-1.85q1.45.46 3.09.48c5.08 0 9-3.64 9-7.9C21 6.65 17.08 3 12 3s-9 3.64-9 7.89c0 1.52.5 2.95 1.36 4.16.54.77.8 1.4.88 1.9a2 2 0 0 1-.06.9l.01-.05a1 1 0 0 0-1.85-.71l-.01.01v.02l-.02.03-.01.02-.04.11v-.02c-.02-.11-.1-.45-.53-1.05A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1" opacity={.4} />
        <path fill="currentColor" d="M3.25 17.31a1 1 0 0 1 1.94.49l-.58 2.33 3.55-1.77a1 1 0 0 1 .9 1.79L5.5 21.92a2 2 0 0 1-2.83-2.27z" />
    </IconBase>
  ))
);

ChatBubbleBoldDuotone.displayName = 'ChatBubbleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleBoldDuotone, ChatBubbleBoldDuotone as ChatBubbleBoldDuotoneIcon, ChatBubbleBoldDuotone as SiChatBubbleBoldDuotone };
export default ChatBubbleBoldDuotone;
export type { ChatBubbleBoldDuotoneProps };
