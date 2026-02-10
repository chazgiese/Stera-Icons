import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotsRegularProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotsRegular = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotsRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dots" {...props}>
      <path fill="currentColor" d="M7.75 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05a1.75 1.75 0 0 1-2.37-1.9l.46-3.01a.3.3 0 0 0-.07-.24A8 8 0 0 1 2.25 11c0-4.91 4.45-8.75 9.75-8.75m0 1.5c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03a1 1 0 0 1 .35 0q1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleDotsRegular.displayName = 'ChatBubbleDotsRegular';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotsRegular, ChatBubbleDotsRegular as ChatBubbleDotsRegularIcon, ChatBubbleDotsRegular as SiChatBubbleDotsRegular };
export default ChatBubbleDotsRegular;
export type { ChatBubbleDotsRegularProps };
