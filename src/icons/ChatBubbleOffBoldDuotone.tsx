import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-bold-duotone" {...props}>
      <path d="M5.5 6.92A6.4 6.4 0 0 0 4 11c0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04 9 9 0 0 0 5.86-.58l1.49 1.48a10.8 10.8 0 0 1-7.49 1.11L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11a8.4 8.4 0 0 1 2.08-5.5zM12 2c5.4 0 10 3.92 10 9 0 1.82-.6 3.5-1.62 4.91a1 1 0 1 1-1.62-1.17A6.3 6.3 0 0 0 20 11c0-3.76-3.47-7-8-7a9 9 0 0 0-3.55.73 1 1 0 0 1-.8-1.84C8.97 2.32 10.45 2 12 2" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChatBubbleOffBoldDuotone.displayName = 'ChatBubbleOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffBoldDuotone, ChatBubbleOffBoldDuotone as ChatBubbleOffBoldDuotoneIcon, ChatBubbleOffBoldDuotone as SiChatBubbleOffBoldDuotone };
export default ChatBubbleOffBoldDuotone;
export type { ChatBubbleOffBoldDuotoneProps };
