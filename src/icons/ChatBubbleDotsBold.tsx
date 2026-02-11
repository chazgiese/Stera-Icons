import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotsBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotsBold = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotsBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dots-bold" {...props}>
      <path d="M7.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04q1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleDotsBold.displayName = 'ChatBubbleDotsBold';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotsBold, ChatBubbleDotsBold as ChatBubbleDotsBoldIcon, ChatBubbleDotsBold as SiChatBubbleDotsBold };
export default ChatBubbleDotsBold;
export type { ChatBubbleDotsBoldProps };
