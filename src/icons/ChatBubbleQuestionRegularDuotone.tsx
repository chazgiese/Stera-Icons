import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleQuestionRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-question-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05a1.75 1.75 0 0 1-2.37-1.9l.46-3.01a.3.3 0 0 0-.07-.24A8 8 0 0 1 2.25 11c0-4.91 4.45-8.75 9.75-8.75m0 1.5c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03a1 1 0 0 1 .35 0q1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75" clipRule="evenodd" opacity={.4} />
        <path d="M12 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 7.25c1.2 0 2.25.92 2.25 2.15 0 .87-.53 1.59-1.25 1.93a1 1 0 0 0-.23.16l-.02.03a.75.75 0 0 1-1.5-.02c0-.84.68-1.33 1.1-1.53.26-.12.4-.35.4-.57 0-.31-.29-.65-.75-.65-.42 0-.71.28-.77.53a.75.75 0 0 1-1.46-.32A2.26 2.26 0 0 1 12 7.25" />
    </IconBase>
  ))
);

ChatBubbleQuestionRegularDuotone.displayName = 'ChatBubbleQuestionRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionRegularDuotone, ChatBubbleQuestionRegularDuotone as ChatBubbleQuestionRegularDuotoneIcon, ChatBubbleQuestionRegularDuotone as SiChatBubbleQuestionRegularDuotone };
export default ChatBubbleQuestionRegularDuotone;
export type { ChatBubbleQuestionRegularDuotoneProps };
