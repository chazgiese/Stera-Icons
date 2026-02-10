import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleAlertFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleAlertFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleAlertFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-alert-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.25a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleAlertFill.displayName = 'ChatBubbleAlertFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleAlertFill, ChatBubbleAlertFill as ChatBubbleAlertFillIcon, ChatBubbleAlertFill as SiChatBubbleAlertFill };
export default ChatBubbleAlertFill;
export type { ChatBubbleAlertFillProps };
