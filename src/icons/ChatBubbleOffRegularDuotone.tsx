import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-duotone" {...props}>
      <path d="M4.76 5.82a7.5 7.5 0 0 0-2.01 5.07 7.4 7.4 0 0 0 1.4 4.3c.79 1.11.92 1.87.85 2.36l-.05.22-.03.09-.55 2.21c-.06.2.16.38.35.29l3.55-1.78.14-.05a1 1 0 0 1 .42 0 10.4 10.4 0 0 0 7.96-.68l1.1 1.1a11.88 11.88 0 0 1-9.22 1.1L5.4 21.7a1.75 1.75 0 0 1-2.48-2l.55-2.2.03-.1v-.03l.02-.02v-.02c0-.03.02-.42-.58-1.26a9 9 0 0 1-1.68-5.18c0-2.34.93-4.47 2.45-6.13zM12 1.25c5.85 0 10.75 4.23 10.75 9.64 0 2.07-.73 3.98-1.95 5.54a.75.75 0 1 1-1.18-.92 7.4 7.4 0 0 0 1.63-4.62c0-4.42-4.06-8.14-9.25-8.14-1.6 0-3.09.35-4.4.97a.75.75 0 1 1-.64-1.35c1.5-.72 3.22-1.12 5.04-1.12" opacity={0.4} />
        <path fill="currentColor" d="M1.47 1.47c.3-.3.77-.3 1.06 0l19 19a.75.75 0 1 1-1.06 1.06l-19-19a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChatBubbleOffRegularDuotone.displayName = 'ChatBubbleOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffRegularDuotone, ChatBubbleOffRegularDuotone as ChatBubbleOffRegularDuotoneIcon, ChatBubbleOffRegularDuotone as SiChatBubbleOffRegularDuotone };
export type { ChatBubbleOffRegularDuotoneProps };
