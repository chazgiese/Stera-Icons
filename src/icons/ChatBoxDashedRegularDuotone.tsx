import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-duotone" {...props}>
      <path d="M3 11.5c.41 0 .75.34.75.75v1.28c0 1.33 1 2.46 2.37 2.68a.75.75 0 0 1-.24 1.48 4.26 4.26 0 0 1-3.63-4.16v-1.28c0-.41.34-.75.75-.75M21 11.5c.41 0 .75.34.75.75v1.28c0 2.12-1.6 3.83-3.63 4.16a.75.75 0 0 1-.24-1.48 2.76 2.76 0 0 0 2.37-2.68v-1.28c0-.41.34-.75.75-.75M14 3.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M14.58 16.38a.75.75 0 1 1 .84 1.24l-5.23 3.49a1.25 1.25 0 0 1-1.94-1.04V17a.75.75 0 0 1 1.5 0v2.6zM17 3.25c2.55 0 4.75 1.9 4.75 4.39V9a.75.75 0 0 1-1.5 0V7.64c0-1.53-1.39-2.89-3.25-2.89a.75.75 0 0 1 0-1.5M6.6 3.25a.75.75 0 0 1 0 1.5 2.8 2.8 0 0 0-2.85 2.72v1.3a.75.75 0 1 1-1.5 0v-1.3A4.3 4.3 0 0 1 6.6 3.25" />
    </IconBase>
  ))
);

ChatBoxDashedRegularDuotone.displayName = 'ChatBoxDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedRegularDuotone, ChatBoxDashedRegularDuotone as ChatBoxDashedRegularDuotoneIcon, ChatBoxDashedRegularDuotone as SiChatBoxDashedRegularDuotone };
export default ChatBoxDashedRegularDuotone;
export type { ChatBoxDashedRegularDuotoneProps };
