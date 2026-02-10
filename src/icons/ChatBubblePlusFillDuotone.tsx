import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubblePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubblePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubblePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-plus-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 5a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChatBubblePlusFillDuotone.displayName = 'ChatBubblePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubblePlusFillDuotone, ChatBubblePlusFillDuotone as ChatBubblePlusFillDuotoneIcon, ChatBubblePlusFillDuotone as SiChatBubblePlusFillDuotone };
export default ChatBubblePlusFillDuotone;
export type { ChatBubblePlusFillDuotoneProps };
