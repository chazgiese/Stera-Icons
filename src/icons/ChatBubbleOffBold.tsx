import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffBold = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 1 1-1.4 1.4l-2.05-2.04a10.8 10.8 0 0 1-7.49 1.11L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11a8.4 8.4 0 0 1 2.08-5.5L2.3 3.7a1 1 0 0 1 0-1.4m3.2 4.62A6.4 6.4 0 0 0 4 11c0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04 9 9 0 0 0 5.86-.58z" clipRule="evenodd" />
        <path fill="currentColor" d="M12 2c5.4 0 10 3.92 10 9 0 1.82-.6 3.5-1.62 4.91a1 1 0 1 1-1.62-1.17A6.3 6.3 0 0 0 20 11c0-3.76-3.47-7-8-7a9 9 0 0 0-3.55.73 1 1 0 0 1-.8-1.84C8.97 2.32 10.45 2 12 2" />
    </IconBase>
  ))
);

ChatBubbleOffBold.displayName = 'ChatBubbleOffBold';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffBold, ChatBubbleOffBold as ChatBubbleOffBoldIcon, ChatBubbleOffBold as SiChatBubbleOffBold };
export default ChatBubbleOffBold;
export type { ChatBubbleOffBoldProps };
