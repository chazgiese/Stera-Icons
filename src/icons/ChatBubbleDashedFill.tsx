import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleDashedFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDashedFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dashed-fill" {...props}>
      <path fill="currentColor" d="M3.25 17.31a1 1 0 0 1 1.94.49l-.58 2.33 3.55-1.77a1 1 0 0 1 .9 1.79L5.5 21.92a2 2 0 0 1-2.83-2.27zM13.69 18.86a1 1 0 0 1 .33 1.97Q13.04 21 12 21a1 1 0 0 1 0-2q.87 0 1.69-.14M19.39 15.57a1 1 0 0 1 1.57 1.23 11 11 0 0 1-3.1 2.67 1 1 0 0 1-1-1.74 9 9 0 0 0 2.53-2.16M12 5c3.87 0 7 2.69 7 6s-3.13 6-7 6-7-2.69-7-6 3.13-6 7-6M1.96 11.74a1 1 0 0 1 1.19.77q.2.96.72 1.94a1 1 0 0 1-1.76.95 9 9 0 0 1-.92-2.47 1 1 0 0 1 .77-1.19M21.56 8.17a1 1 0 0 1 1.2.75 9 9 0 0 1 0 4.16 1 1 0 1 1-1.95-.46 7 7 0 0 0 0-3.24 1 1 0 0 1 .75-1.2M4.83 3.6a1 1 0 0 1 1.26 1.55 9 9 0 0 0-2.54 3.33A1 1 0 0 1 1.7 7.7c.67-1.6 1.77-3 3.13-4.11M16.49 2.9a1 1 0 0 1 1.36-.37Q19.7 3.6 20.96 5.2a1 1 0 1 1-1.57 1.23 9 9 0 0 0-2.53-2.16 1 1 0 0 1-.37-1.37M12 1q1.04 0 2.02.17a1 1 0 0 1-.33 1.97Q12.87 3 11.99 3q-1.06 0-2.1.25a1 1 0 0 1-.47-1.94Q10.67 1.01 12 1" />
    </IconBase>
  ))
);

ChatBubbleDashedFill.displayName = 'ChatBubbleDashedFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashedFill, ChatBubbleDashedFill as ChatBubbleDashedFillIcon, ChatBubbleDashedFill as SiChatBubbleDashedFill };
export default ChatBubbleDashedFill;
export type { ChatBubbleDashedFillProps };
