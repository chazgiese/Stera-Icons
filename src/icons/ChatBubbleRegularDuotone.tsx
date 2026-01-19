import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-duotone" {...props}>
      <path fill="currentColor" d="M4.37 16.7c.4.06.69.44.63.85l-.05.22-.03.09-.55 2.21c-.06.2.16.38.35.29l3.55-1.78a.75.75 0 0 1 .67 1.34L5.4 21.7a1.75 1.75 0 0 1-2.48-2l.55-2.2.03-.1v-.03l.02-.02v-.02c.07-.41.45-.7.86-.63" />
        <path fill="currentColor" d="M12 1.25c5.85 0 10.75 4.23 10.75 9.64s-4.9 9.64-10.75 9.64q-1.75-.01-3.33-.47l.27-.14a.75.75 0 0 0-.1-1.38q1.48.48 3.16.49c5.2 0 9.25-3.73 9.25-8.14S17.19 2.75 12 2.75s-9.25 3.72-9.25 8.14a7.4 7.4 0 0 0 1.4 4.3c.74 1.05.9 1.79.85 2.27a.75.75 0 0 0-1.49-.13q0-.02 0 0c0-.03.02-.42-.58-1.26a9 9 0 0 1-1.68-5.18c0-5.4 4.9-9.64 10.75-9.64" opacity={.4} />
    </IconBase>
  ))
);

ChatBubbleRegularDuotone.displayName = 'ChatBubbleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleRegularDuotone, ChatBubbleRegularDuotone as ChatBubbleRegularDuotoneIcon, ChatBubbleRegularDuotone as SiChatBubbleRegularDuotone };
export default ChatBubbleRegularDuotone;
export type { ChatBubbleRegularDuotoneProps };
