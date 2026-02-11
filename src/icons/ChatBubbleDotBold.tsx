import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotBold = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dot-bold" {...props}>
      <path d="M12 2q.87 0 1.7.13a1 1 0 1 1-.31 1.98Q12.71 4 12 4c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04q1 .23 2.1.24c4.53 0 8-3.24 8-7q0-.26-.02-.5a1 1 0 0 1 2-.17L22 11c0 5.08-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9" />
        <path d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBubbleDotBold.displayName = 'ChatBubbleDotBold';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotBold, ChatBubbleDotBold as ChatBubbleDotBoldIcon, ChatBubbleDotBold as SiChatBubbleDotBold };
export default ChatBubbleDotBold;
export type { ChatBubbleDotBoldProps };
