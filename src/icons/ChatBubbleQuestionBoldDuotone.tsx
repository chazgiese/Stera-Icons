import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleQuestionBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-question-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04q1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" opacity={.4} />
        <path d="M12 13a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.75c1.31 0 2.5 1.01 2.5 2.4 0 .97-.6 1.78-1.4 2.15l-.1.06v.01a1 1 0 0 1-2-.12c0-.99.8-1.54 1.25-1.75q.26-.15.25-.35c0-.16-.16-.4-.5-.4-.32 0-.5.21-.52.33a1 1 0 0 1-1.96-.42A2.5 2.5 0 0 1 12 6.75" />
    </IconBase>
  ))
);

ChatBubbleQuestionBoldDuotone.displayName = 'ChatBubbleQuestionBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionBoldDuotone, ChatBubbleQuestionBoldDuotone as ChatBubbleQuestionBoldDuotoneIcon, ChatBubbleQuestionBoldDuotone as SiChatBubbleQuestionBoldDuotone };
export default ChatBubbleQuestionBoldDuotone;
export type { ChatBubbleQuestionBoldDuotoneProps };
