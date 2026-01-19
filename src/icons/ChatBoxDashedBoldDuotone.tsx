import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-bold-duotone" {...props}>
      <path d="M2 11.5a1 1 0 0 1 1 1V14a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.5a1 1 0 0 1 1-1M22 11.5a1 1 0 0 1 1 1V14a5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3v-1.5a1 1 0 0 1 1-1M6 2a1 1 0 0 1 0 2 3 3 0 0 0-3 3v1.5a1 1 0 0 1-2 0V7a5 5 0 0 1 5-5M18 2a5 5 0 0 1 5 5v1.5a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2M14.25 2a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M14.45 17.17a1 1 0 0 1 1.1 1.66l-5.22 3.48A1.5 1.5 0 0 1 8 21.07V18a1 1 0 0 1 2 0v2.13z" />
    </IconBase>
  ))
);

ChatBoxDashedBoldDuotone.displayName = 'ChatBoxDashedBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedBoldDuotone, ChatBoxDashedBoldDuotone as ChatBoxDashedBoldDuotoneIcon, ChatBoxDashedBoldDuotone as SiChatBoxDashedBoldDuotone };
export type { ChatBoxDashedBoldDuotoneProps };
