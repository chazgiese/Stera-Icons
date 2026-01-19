import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleQuestionRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-question-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c5.85 0 10.75 4.23 10.75 9.64s-4.9 9.64-10.75 9.64q-1.75-.01-3.33-.47L5.4 21.7a1.75 1.75 0 0 1-2.48-2l.55-2.2.03-.1v-.03l.02-.02v-.02c0-.03.02-.42-.58-1.26a9 9 0 0 1-1.68-5.18c0-5.4 4.9-9.64 10.75-9.64m0 1.5c-5.2 0-9.25 3.72-9.25 8.14a7.4 7.4 0 0 0 1.4 4.3c.79 1.11.92 1.87.85 2.36l-.05.22-.03.09-.55 2.21c-.06.2.16.38.35.29l3.55-1.78.14-.05a1 1 0 0 1 .42 0q1.5.49 3.17.5c5.2 0 9.25-3.73 9.25-8.14S17.19 2.75 12 2.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c1.35 0 2.75.9 2.75 2.35 0 1.07-.8 1.87-1.72 2.18q-.16.07-.24.15l-.04.07a.75.75 0 0 1-1.5 0c0-.9.72-1.44 1.3-1.64.5-.17.7-.51.7-.76 0-.32-.4-.85-1.25-.85-.74 0-1.2.42-1.27.71a.75.75 0 0 1-1.46-.36c.3-1.17 1.54-1.85 2.73-1.85" />
    </IconBase>
  ))
);

ChatBubbleQuestionRegularDuotone.displayName = 'ChatBubbleQuestionRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionRegularDuotone, ChatBubbleQuestionRegularDuotone as ChatBubbleQuestionRegularDuotoneIcon, ChatBubbleQuestionRegularDuotone as SiChatBubbleQuestionRegularDuotone };
export type { ChatBubbleQuestionRegularDuotoneProps };
