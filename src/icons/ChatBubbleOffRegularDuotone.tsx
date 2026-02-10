import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-duotone" {...props}>
      <path d="M5.49 6.55A6.7 6.7 0 0 0 3.75 11c0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03a1 1 0 0 1 .35 0 9.3 9.3 0 0 0 6.34-.75l1.1 1.1a10.5 10.5 0 0 1-7.55 1.16L5.9 21.05a1.75 1.75 0 0 1-2.37-1.9l.46-3.01a.3.3 0 0 0-.07-.24A8 8 0 0 1 2.25 11c0-2.1.82-4.02 2.18-5.51zM12 2.25c5.3 0 9.75 3.84 9.75 8.75 0 1.76-.58 3.4-1.57 4.77a.75.75 0 0 1-1.22-.88A6.6 6.6 0 0 0 20.25 11c0-3.92-3.6-7.25-8.25-7.25q-1.98.01-3.65.75a.75.75 0 0 1-.6-1.38Q9.7 2.26 12 2.25" opacity={0.4} />
        <path fill="currentColor" d="M2.47 2.47c.3-.3.77-.3 1.06 0l17 17a.75.75 0 1 1-1.06 1.06l-17-17a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChatBubbleOffRegularDuotone.displayName = 'ChatBubbleOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffRegularDuotone, ChatBubbleOffRegularDuotone as ChatBubbleOffRegularDuotoneIcon, ChatBubbleOffRegularDuotone as SiChatBubbleOffRegularDuotone };
export default ChatBubbleOffRegularDuotone;
export type { ChatBubbleOffRegularDuotoneProps };
