import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleQuestionFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-question-fill" {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.5c-1.13 0-2.23.75-2.48 1.9a1 1 0 0 0 1.96.43c.02-.12.2-.33.52-.33.34 0 .5.24.5.4q.01.2-.25.35C11.8 9.45 11 10 11 11a1 1 0 0 0 2 .12v-.01l.1-.06a2.4 2.4 0 0 0 1.4-2.15c0-1.39-1.19-2.4-2.5-2.4" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleQuestionFill.displayName = 'ChatBubbleQuestionFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionFill, ChatBubbleQuestionFill as ChatBubbleQuestionFillIcon, ChatBubbleQuestionFill as SiChatBubbleQuestionFill };
export default ChatBubbleQuestionFill;
export type { ChatBubbleQuestionFillProps };
