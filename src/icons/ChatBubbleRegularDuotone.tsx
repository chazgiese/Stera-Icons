import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24l.21-.08a.75.75 0 0 0-.1-1.43q1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .26.35.4.8.36 1.27a.75.75 0 0 0-1.49-.13.3.3 0 0 0-.07-.24A8 8 0 0 1 2.25 11c0-4.91 4.45-8.75 9.75-8.75" opacity={.4} />
        <path fill="currentColor" d="M3.99 16.14a.75.75 0 0 1 1.48.23l-.46 3.01c-.03.2.16.34.34.27l4.05-1.62a.75.75 0 0 1 .55 1.4L5.9 21.05a1.75 1.75 0 0 1-2.38-1.9z" />
    </IconBase>
  ))
);

ChatBubbleRegularDuotone.displayName = 'ChatBubbleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleRegularDuotone, ChatBubbleRegularDuotone as ChatBubbleRegularDuotoneIcon, ChatBubbleRegularDuotone as SiChatBubbleRegularDuotone };
export default ChatBubbleRegularDuotone;
export type { ChatBubbleRegularDuotoneProps };
