import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxQuestionFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxQuestionFill = memo(
  forwardRef<SVGSVGElement, ChatBoxQuestionFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-question-fill" {...props}>
      <path fillRule="evenodd" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.5 3q-.29.2-.55.35c-.17.09-.47.24-.84.21a1.5 1.5 0 0 1-1.1-.59c-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3zM12 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.5c-1.13 0-2.23.75-2.48 1.9a1 1 0 0 0 1.96.43c.02-.12.2-.33.52-.33.34 0 .5.24.5.4q.01.2-.25.35c-.45.2-1.25.76-1.25 1.75a1 1 0 0 0 2 .12v-.01l.1-.06a2.4 2.4 0 0 0 1.4-2.15c0-1.39-1.19-2.4-2.5-2.4" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxQuestionFill.displayName = 'ChatBoxQuestionFill';

// Triple export pattern (lucide-react style)
export { ChatBoxQuestionFill, ChatBoxQuestionFill as ChatBoxQuestionFillIcon, ChatBoxQuestionFill as SiChatBoxQuestionFill };
export default ChatBoxQuestionFill;
export type { ChatBoxQuestionFillProps };
