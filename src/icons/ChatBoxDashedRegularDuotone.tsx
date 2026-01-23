import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-duotone" {...props}>
      <path d="M2 11.75c.41 0 .75.34.75.75V14c0 1.8 1.46 3.25 3.25 3.25a.75.75 0 0 1 0 1.5A4.75 4.75 0 0 1 1.25 14v-1.5c0-.41.34-.75.75-.75M22 11.75c.41 0 .75.34.75.75V14A4.75 4.75 0 0 1 18 18.75a.75.75 0 0 1 0-1.5c1.8 0 3.25-1.46 3.25-3.25v-1.5c0-.41.34-.75.75-.75M6 2.25a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 0 2.75 7v1.5a.75.75 0 0 1-1.5 0V7A4.75 4.75 0 0 1 6 2.25M18 2.25A4.75 4.75 0 0 1 22.75 7v1.5a.75.75 0 0 1-1.5 0V7c0-1.8-1.46-3.25-3.25-3.25a.75.75 0 0 1 0-1.5M14.25 2.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M14.58 17.38a.75.75 0 0 1 .84 1.24l-5.23 3.49a1.25 1.25 0 0 1-1.94-1.04V18a.75.75 0 0 1 1.5 0v2.6z" />
    </IconBase>
  ))
);

ChatBoxDashedRegularDuotone.displayName = 'ChatBoxDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedRegularDuotone, ChatBoxDashedRegularDuotone as ChatBoxDashedRegularDuotoneIcon, ChatBoxDashedRegularDuotone as SiChatBoxDashedRegularDuotone };
export default ChatBoxDashedRegularDuotone;
export type { ChatBoxDashedRegularDuotoneProps };
