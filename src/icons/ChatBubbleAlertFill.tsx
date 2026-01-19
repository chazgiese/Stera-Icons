import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleAlertFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleAlertFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleAlertFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-alert-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1m0 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.25a1 1 0 0 0-1 1v3.1a1 1 0 0 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleAlertFill.displayName = 'ChatBubbleAlertFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleAlertFill, ChatBubbleAlertFill as ChatBubbleAlertFillIcon, ChatBubbleAlertFill as SiChatBubbleAlertFill };
export type { ChatBubbleAlertFillProps };
