import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatMessagesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatMessagesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-messages-fill-duotone" {...props}>
      <path fill="currentColor" d="M18 9.25A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.09.67L20.3 20a2 2 0 0 0-1-.24H12A4.75 4.75 0 0 1 7.25 15v-1A4.75 4.75 0 0 1 12 9.25z" />
        <path fill="currentColor" d="M12 3.25A4.75 4.75 0 0 1 16.75 8v1.25H12c-2.54 0-4.61 2-4.74 4.5H4.7q-.54 0-1 .24l-1.38.68A.75.75 0 0 1 1.25 14V8A4.75 4.75 0 0 1 6 3.25z" opacity={.4} />
    </IconBase>
  ))
);

ChatMessagesFillDuotone.displayName = 'ChatMessagesFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatMessagesFillDuotone, ChatMessagesFillDuotone as ChatMessagesFillDuotoneIcon, ChatMessagesFillDuotone as SiChatMessagesFillDuotone };
export type { ChatMessagesFillDuotoneProps };
