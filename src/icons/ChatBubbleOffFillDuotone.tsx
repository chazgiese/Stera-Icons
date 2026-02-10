import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-fill-duotone" {...props}>
      <path d="M17.24 18.66a10.8 10.8 0 0 1-7.48 1.11L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-2.1.78-4 2.08-5.5zM12 2c5.4 0 10 3.92 10 9 0 2.6-1.2 4.88-3.09 6.5L5.54 4.13A10.7 10.7 0 0 1 12 2" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChatBubbleOffFillDuotone.displayName = 'ChatBubbleOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffFillDuotone, ChatBubbleOffFillDuotone as ChatBubbleOffFillDuotoneIcon, ChatBubbleOffFillDuotone as SiChatBubbleOffFillDuotone };
export default ChatBubbleOffFillDuotone;
export type { ChatBubbleOffFillDuotoneProps };
