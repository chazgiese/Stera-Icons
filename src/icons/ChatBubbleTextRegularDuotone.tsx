import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-text-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c5.85 0 10.75 4.23 10.75 9.64s-4.9 9.64-10.75 9.64q-1.75-.01-3.33-.47L5.4 21.7a1.75 1.75 0 0 1-2.48-2l.55-2.2.03-.1v-.03l.02-.02v-.02c0-.03.02-.42-.58-1.26a9 9 0 0 1-1.68-5.18c0-5.4 4.9-9.64 10.75-9.64m0 1.5c-5.2 0-9.25 3.72-9.25 8.14a7.4 7.4 0 0 0 1.4 4.3c.79 1.11.92 1.87.85 2.36l-.05.22-.03.09-.55 2.21c-.06.2.16.38.35.29l3.55-1.78.14-.05a1 1 0 0 1 .42 0q1.5.49 3.17.5c5.2 0 9.25-3.73 9.25-8.14S17.19 2.75 12 2.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 12.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 8.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChatBubbleTextRegularDuotone.displayName = 'ChatBubbleTextRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleTextRegularDuotone, ChatBubbleTextRegularDuotone as ChatBubbleTextRegularDuotoneIcon, ChatBubbleTextRegularDuotone as SiChatBubbleTextRegularDuotone };
export default ChatBubbleTextRegularDuotone;
export type { ChatBubbleTextRegularDuotoneProps };
