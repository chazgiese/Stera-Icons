import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotBold = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dot-bold" {...props}>
      <path fill="currentColor" d="M12 1q.66 0 1.3.07a1 1 0 0 1-.2 1.99Q12.54 3 12 3c-5.08 0-9 3.64-9 7.89 0 1.52.5 2.95 1.36 4.16.8 1.14.97 1.97.88 2.54l-.05.25-.01.03-.01.03v.01l-.56 2.22 3.55-1.77.09-.04a1 1 0 0 1 .66-.02q1.45.46 3.09.48c5.08 0 9-3.64 9-7.9v-.1a1 1 0 0 1 2-.02v.13c0 5.57-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1" />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChatBubbleDotBold.displayName = 'ChatBubbleDotBold';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotBold, ChatBubbleDotBold as ChatBubbleDotBoldIcon, ChatBubbleDotBold as SiChatBubbleDotBold };
export default ChatBubbleDotBold;
export type { ChatBubbleDotBoldProps };
