import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleDotsFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotsFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dots-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1M7.5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleDotsFill.displayName = 'ChatBubbleDotsFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotsFill, ChatBubbleDotsFill as ChatBubbleDotsFillIcon, ChatBubbleDotsFill as SiChatBubbleDotsFill };
export type { ChatBubbleDotsFillProps };
