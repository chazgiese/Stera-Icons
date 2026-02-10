import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedBold = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-bold" {...props}>
      <path fill="currentColor" d="M14.45 16.17a1 1 0 1 1 1.1 1.66l-5.22 3.48A1.5 1.5 0 0 1 8 20.07V17a1 1 0 1 1 2 0v2.13zM3 11.25a1 1 0 0 1 1 1v1.28c0 1.2.9 2.23 2.16 2.43a1 1 0 0 1-.32 1.98A4.5 4.5 0 0 1 2 13.54v-1.29a1 1 0 0 1 1-1M21 11.25a1 1 0 0 1 1 1v1.28a4.5 4.5 0 0 1-3.84 4.4 1 1 0 0 1-.32-1.97A2.5 2.5 0 0 0 20 13.53v-1.28a1 1 0 0 1 1-1M17 3c2.67 0 5 1.99 5 4.64V9a1 1 0 1 1-2 0V7.64C20 6.27 18.75 5 17 5a1 1 0 1 1 0-2M6.6 3a1 1 0 0 1 0 2A2.54 2.54 0 0 0 4 7.47v1.3a1 1 0 1 1-2 0v-1.3C2 4.97 4.1 3 6.6 3M14 3a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ChatBoxDashedBold.displayName = 'ChatBoxDashedBold';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedBold, ChatBoxDashedBold as ChatBoxDashedBoldIcon, ChatBoxDashedBold as SiChatBoxDashedBold };
export default ChatBoxDashedBold;
export type { ChatBoxDashedBoldProps };
