import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxQuestionFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxQuestionFill = memo(
  forwardRef<SVGSVGElement, ChatBoxQuestionFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-question-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.8q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2zM12 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-7.25c-1.26 0-2.64.72-2.97 2.03a1 1 0 0 0 1.94.5c.04-.15.36-.53 1.03-.53.34 0 .62.11.79.25s.21.27.21.35c0 .11-.1.38-.54.53-.63.21-1.46.83-1.46 1.87a1 1 0 0 0 2 .08l.02-.02.09-.04C14.1 10.18 15 9.3 15 8.1c0-1.63-1.56-2.6-3-2.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxQuestionFill.displayName = 'ChatBoxQuestionFill';

// Triple export pattern (lucide-react style)
export { ChatBoxQuestionFill, ChatBoxQuestionFill as ChatBoxQuestionFillIcon, ChatBoxQuestionFill as SiChatBoxQuestionFill };
export default ChatBoxQuestionFill;
export type { ChatBoxQuestionFillProps };
