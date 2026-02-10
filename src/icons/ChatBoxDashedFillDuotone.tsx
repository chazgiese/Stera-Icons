import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-fill-duotone" {...props}>
      <path fill="currentColor" d="M5.5 10.1c0-1.26 0-1.89.25-2.37q.33-.65.98-.98C7.2 6.5 7.84 6.5 9.1 6.5h5.8c1.26 0 1.89 0 2.37.25q.65.33.98.98c.25.48.25 1.11.25 2.37v.8c0 1.26 0 1.89-.25 2.37q-.33.65-.98.98c-.48.25-1.11.25-2.37.25H9.1c-1.26 0-1.89 0-2.37-.25a2.3 2.3 0 0 1-.98-.98c-.25-.48-.25-1.11-.25-2.37z" opacity={.4} />
        <path fill="currentColor" d="M14.45 16.17a1 1 0 1 1 1.1 1.66l-5.22 3.48A1.5 1.5 0 0 1 8 20.07V17a1 1 0 1 1 2 0v2.13zM3 11.25a1 1 0 0 1 1 1v1.28c0 1.2.9 2.23 2.16 2.43a1 1 0 0 1-.32 1.98A4.5 4.5 0 0 1 2 13.54v-1.29a1 1 0 0 1 1-1M21 11.25a1 1 0 0 1 1 1v1.28a4.5 4.5 0 0 1-3.84 4.4 1 1 0 0 1-.32-1.97A2.5 2.5 0 0 0 20 13.53v-1.28a1 1 0 0 1 1-1M17 3c2.67 0 5 1.99 5 4.64V9a1 1 0 1 1-2 0V7.64C20 6.27 18.75 5 17 5a1 1 0 1 1 0-2M6.6 3a1 1 0 0 1 0 2A2.54 2.54 0 0 0 4 7.47v1.3a1 1 0 1 1-2 0v-1.3C2 4.97 4.1 3 6.6 3M14 3a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ChatBoxDashedFillDuotone.displayName = 'ChatBoxDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedFillDuotone, ChatBoxDashedFillDuotone as ChatBoxDashedFillDuotoneIcon, ChatBoxDashedFillDuotone as SiChatBoxDashedFillDuotone };
export default ChatBoxDashedFillDuotone;
export type { ChatBoxDashedFillDuotoneProps };
