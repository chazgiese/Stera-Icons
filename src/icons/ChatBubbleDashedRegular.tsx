import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDashedRegularProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDashedRegular = memo(
  forwardRef<SVGSVGElement, ChatBubbleDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dashed" {...props}>
      <path d="M4.91 15.06c.41.06.7.45.63.85l-.53 3.47c-.03.2.16.35.34.27l4.05-1.62a.75.75 0 0 1 .55 1.4L5.9 21.05a1.75 1.75 0 0 1-2.37-1.9l.53-3.46c.06-.41.45-.7.85-.63M14.07 18.02a.75.75 0 0 1 .33 1.46q-.82.18-1.69.25a.75.75 0 1 1-.1-1.5q.75-.05 1.46-.21M18.9 14.98a.75.75 0 0 1 1.2.9c-.69.9-1.55 1.7-2.54 2.31a.75.75 0 0 1-.8-1.27 8 8 0 0 0 2.13-1.94M2.97 10.53c.42-.02.77.3.78.72q.03.83.3 1.7a.75.75 0 0 1-1.43.46 8 8 0 0 1-.37-2.1.75.75 0 0 1 .72-.78M20.63 8.61c.4-.1.81.16.9.56a8 8 0 0 1 .03 3.57.75.75 0 1 1-1.47-.33 6.4 6.4 0 0 0-.01-2.9c-.1-.4.15-.8.55-.9M6.12 4.13a.75.75 0 0 1 .86 1.23 8 8 0 0 0-2.4 2.58.75.75 0 0 1-1.3-.74 9.5 9.5 0 0 1 2.84-3.07M16.15 3.87a.75.75 0 0 1 1.02-.3q1.63.92 2.76 2.33a.75.75 0 0 1-1.17.94 8 8 0 0 0-2.32-1.95.75.75 0 0 1-.3-1.02M12 2.25q.91 0 1.79.15a.75.75 0 0 1-.25 1.48 9 9 0 0 0-3.3.06.75.75 0 1 1-.32-1.47A10 10 0 0 1 12 2.25" />
    </IconBase>
  ))
);

ChatBubbleDashedRegular.displayName = 'ChatBubbleDashedRegular';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashedRegular, ChatBubbleDashedRegular as ChatBubbleDashedRegularIcon, ChatBubbleDashedRegular as SiChatBubbleDashedRegular };
export default ChatBubbleDashedRegular;
export type { ChatBubbleDashedRegularProps };
