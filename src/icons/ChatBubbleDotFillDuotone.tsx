import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dot-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 2q1.37 0 2.64.32a5 5 0 0 0 7.17 6.92Q22 10.1 22 11c0 5.08-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9" opacity={.4} />
        <path fill="currentColor" d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBubbleDotFillDuotone.displayName = 'ChatBubbleDotFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotFillDuotone, ChatBubbleDotFillDuotone as ChatBubbleDotFillDuotoneIcon, ChatBubbleDotFillDuotone as SiChatBubbleDotFillDuotone };
export default ChatBubbleDotFillDuotone;
export type { ChatBubbleDotFillDuotoneProps };
