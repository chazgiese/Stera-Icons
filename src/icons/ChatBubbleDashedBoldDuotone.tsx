import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dashed-bold-duotone" {...props}>
      <path d="M1.96 11.6a1 1 0 0 1 1.2.77q.19.95.72 1.92a1 1 0 0 1-1.76.96 9 9 0 0 1-.92-2.46 1 1 0 0 1 .76-1.19M12 1q1.04 0 2.01.17a1 1 0 0 1-.33 1.97Q12.87 2.99 12 3q-1.06 0-2.1.25a1 1 0 0 1-.46-1.95Q10.7 1 12 1M21.55 8.08a1 1 0 0 1 1.2.74 9 9 0 0 1 0 4.14 1 1 0 0 1-1.94-.46 7 7 0 0 0 0-3.22 1 1 0 0 1 .74-1.2M13.68 18.64a1 1 0 0 1 .33 1.97q-.97.17-2.01.17a1 1 0 0 1 0-2q.87 0 1.68-.14" opacity={0.4} />
        <path fill="currentColor" d="M3.25 17.31a1 1 0 0 1 1.94.49l-.58 2.33 3.55-1.77a1 1 0 0 1 .9 1.79L5.5 21.92a2 2 0 0 1-2.83-2.27zM19.38 15.4a1 1 0 0 1 1.56 1.26 11 11 0 0 1-3.11 2.62 1 1 0 0 1-.98-1.74q1.5-.87 2.53-2.13M4.87 3.54A1 1 0 0 1 6.12 5.1a8.6 8.6 0 0 0-2.56 3.28 1 1 0 0 1-1.84-.79 10.6 10.6 0 0 1 3.15-4.05M16.46 2.88a1 1 0 0 1 1.37-.38c1.2.68 2.27 1.57 3.1 2.62a1 1 0 0 1-1.55 1.25 9 9 0 0 0-2.53-2.13 1 1 0 0 1-.39-1.36" />
    </IconBase>
  ))
);

ChatBubbleDashedBoldDuotone.displayName = 'ChatBubbleDashedBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashedBoldDuotone, ChatBubbleDashedBoldDuotone as ChatBubbleDashedBoldDuotoneIcon, ChatBubbleDashedBoldDuotone as SiChatBubbleDashedBoldDuotone };
export default ChatBubbleDashedBoldDuotone;
export type { ChatBubbleDashedBoldDuotoneProps };
