import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23l.29-.11a1 1 0 0 0-.15-1.9q1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7-8 3.24-8 7c0 1.41.48 2.73 1.31 3.84.3.4.47.91.42 1.45a1 1 0 0 0-1.99-.2q0 .02 0 0l-.02-.04A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9" opacity={.4} />
        <path fill="currentColor" d="M4.88 15.26a1 1 0 0 1 .84 1.14l-.46 3.02L9.3 17.8a1 1 0 0 1 .75 1.86L6 21.28a2 2 0 0 1-2.72-2.16l.46-3.02a1 1 0 0 1 1.14-.84" />
    </IconBase>
  ))
);

ChatBubbleBoldDuotone.displayName = 'ChatBubbleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleBoldDuotone, ChatBubbleBoldDuotone as ChatBubbleBoldDuotoneIcon, ChatBubbleBoldDuotone as SiChatBubbleBoldDuotone };
export default ChatBubbleBoldDuotone;
export type { ChatBubbleBoldDuotoneProps };
