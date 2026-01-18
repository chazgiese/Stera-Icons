import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleDotFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1q1.5 0 2.89.35a5.5 5.5 0 0 0 7.9 7.63q.21.92.21 1.9c0 5.58-5.04 9.9-11 9.9q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1" />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChatBubbleDotFill.displayName = 'ChatBubbleDotFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotFill, ChatBubbleDotFill as ChatBubbleDotFillIcon, ChatBubbleDotFill as SiChatBubbleDotFill };
export type { ChatBubbleDotFillProps };
