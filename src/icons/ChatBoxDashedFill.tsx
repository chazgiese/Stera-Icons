import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedFill = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-fill" {...props}>
      <path fill="currentColor" d="M14.45 17.17a1 1 0 1 1 1.1 1.66l-5.22 3.48A1.5 1.5 0 0 1 8 21.07V18a1 1 0 1 1 2 0v2.13zM2 11.5a1 1 0 0 1 1 1V14a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.5a1 1 0 0 1 1-1M22 11.5a1 1 0 0 1 1 1V14a5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3v-1.5a1 1 0 0 1 1-1M15.4 6c1.26 0 1.89 0 2.37.25q.65.33.98.98C19 7.7 19 8.34 19 9.6v1.8c0 1.26 0 1.89-.25 2.37q-.33.65-.98.98c-.48.25-1.11.25-2.37.25H8.6c-1.26 0-1.89 0-2.37-.25a2.3 2.3 0 0 1-.98-.98C5 13.3 5 12.66 5 11.4V9.6c0-1.26 0-1.89.25-2.37q.33-.65.98-.98C6.7 6 7.34 6 8.6 6zM6 2a1 1 0 0 1 0 2 3 3 0 0 0-3 3v1.5a1 1 0 0 1-2 0V7a5 5 0 0 1 5-5M18 2a5 5 0 0 1 5 5v1.5a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2M14.25 2a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChatBoxDashedFill.displayName = 'ChatBoxDashedFill';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedFill, ChatBoxDashedFill as ChatBoxDashedFillIcon, ChatBoxDashedFill as SiChatBoxDashedFill };
export default ChatBoxDashedFill;
export type { ChatBoxDashedFillProps };
