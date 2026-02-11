import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-question-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.5c-1.13 0-2.23.75-2.48 1.9a1 1 0 0 0 1.96.43c.03-.12.2-.33.52-.33.34 0 .5.24.5.4q.01.2-.25.35C11.8 9.45 11 10 11 11a1 1 0 0 0 2 .12v-.01l.1-.06a2.4 2.4 0 0 0 1.4-2.15c0-1.39-1.18-2.4-2.5-2.4" clipRule="evenodd" opacity={.4} />
        <path d="M12 13a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.5c1.31 0 2.5 1.01 2.5 2.4 0 .97-.6 1.78-1.4 2.15l-.1.06v.01a1 1 0 0 1-2-.12c0-.99.8-1.54 1.25-1.75q.26-.15.25-.35c0-.16-.16-.4-.5-.4-.32 0-.5.21-.52.33a1 1 0 0 1-1.96-.42A2.5 2.5 0 0 1 12 6.5" />
    </IconBase>
  ))
);

ChatBubbleQuestionFillDuotone.displayName = 'ChatBubbleQuestionFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionFillDuotone, ChatBubbleQuestionFillDuotone as ChatBubbleQuestionFillDuotoneIcon, ChatBubbleQuestionFillDuotone as SiChatBubbleQuestionFillDuotone };
export default ChatBubbleQuestionFillDuotone;
export type { ChatBubbleQuestionFillDuotoneProps };
