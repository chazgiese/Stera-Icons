import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubblePlusFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubblePlusFill = memo(
  forwardRef<SVGSVGElement, ChatBubblePlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1m0 6a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubblePlusFill.displayName = 'ChatBubblePlusFill';

// Triple export pattern (lucide-react style)
export { ChatBubblePlusFill, ChatBubblePlusFill as ChatBubblePlusFillIcon, ChatBubblePlusFill as SiChatBubblePlusFill };
export type { ChatBubblePlusFillProps };
