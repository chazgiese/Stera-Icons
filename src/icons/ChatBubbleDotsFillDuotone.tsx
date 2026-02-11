import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotsFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dots-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9M7.5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M7.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ChatBubbleDotsFillDuotone.displayName = 'ChatBubbleDotsFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotsFillDuotone, ChatBubbleDotsFillDuotone as ChatBubbleDotsFillDuotoneIcon, ChatBubbleDotsFillDuotone as SiChatBubbleDotsFillDuotone };
export default ChatBubbleDotsFillDuotone;
export type { ChatBubbleDotsFillDuotoneProps };
