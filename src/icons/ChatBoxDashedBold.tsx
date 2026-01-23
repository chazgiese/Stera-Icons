import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedBold = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-bold" {...props}>
      <path fill="currentColor" d="M14.45 17.17a1 1 0 1 1 1.1 1.66l-5.22 3.48A1.5 1.5 0 0 1 8 21.07V18a1 1 0 1 1 2 0v2.13zM2 11.5a1 1 0 0 1 1 1V14a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.5a1 1 0 0 1 1-1M22 11.5a1 1 0 0 1 1 1V14a5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3v-1.5a1 1 0 0 1 1-1M6 2a1 1 0 0 1 0 2 3 3 0 0 0-3 3v1.5a1 1 0 0 1-2 0V7a5 5 0 0 1 5-5M18 2a5 5 0 0 1 5 5v1.5a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2M14.25 2a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChatBoxDashedBold.displayName = 'ChatBoxDashedBold';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedBold, ChatBoxDashedBold as ChatBoxDashedBoldIcon, ChatBoxDashedBold as SiChatBoxDashedBold };
export default ChatBoxDashedBold;
export type { ChatBoxDashedBoldProps };
