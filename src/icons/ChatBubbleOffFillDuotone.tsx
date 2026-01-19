import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-fill-duotone" {...props}>
      <path d="M17.85 19.26a12 12 0 0 1-9.15 1.06l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89a9.2 9.2 0 0 1 2.36-6.12zM12 1c5.96 0 11 4.32 11 9.89a9.4 9.4 0 0 1-3.48 7.21L4.82 3.4C6.76 1.9 9.28 1 12 1" opacity={0.4} />
        <path fill="currentColor" d="M1.3 1.3a1 1 0 0 1 1.4 0l19 19a1 1 0 0 1-1.4 1.4l-19-19a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChatBubbleOffFillDuotone.displayName = 'ChatBubbleOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffFillDuotone, ChatBubbleOffFillDuotone as ChatBubbleOffFillDuotoneIcon, ChatBubbleOffFillDuotone as SiChatBubbleOffFillDuotone };
export type { ChatBubbleOffFillDuotoneProps };
