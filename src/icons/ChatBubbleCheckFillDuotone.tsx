import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-check-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m4.2 6.04a1 1 0 0 0-1.4 0l-4.16 4.18-1.34-1.8a1 1 0 0 0-1.6 1.2l1.48 1.98q.13.19.28.36c.1.12.27.29.52.4q.5.2 1.01.07c.26-.07.45-.21.57-.32l.34-.31 4.3-4.34a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path d="M14.8 8.05a1 1 0 0 1 1.4 1.4l-4.3 4.35q-.16.16-.34.31c-.12.1-.3.25-.57.32a1.5 1.5 0 0 1-1.53-.46l-.28-.37-1.48-1.98a1 1 0 0 1 1.6-1.2l1.34 1.8z" />
    </IconBase>
  ))
);

ChatBubbleCheckFillDuotone.displayName = 'ChatBubbleCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleCheckFillDuotone, ChatBubbleCheckFillDuotone as ChatBubbleCheckFillDuotoneIcon, ChatBubbleCheckFillDuotone as SiChatBubbleCheckFillDuotone };
export default ChatBubbleCheckFillDuotone;
export type { ChatBubbleCheckFillDuotoneProps };
