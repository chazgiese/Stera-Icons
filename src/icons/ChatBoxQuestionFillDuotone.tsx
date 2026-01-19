import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-question-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.8q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2zM12 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-7.25c-1.26 0-2.64.72-2.97 2.03a1 1 0 0 0 1.94.5c.04-.15.36-.53 1.03-.53.34 0 .62.11.79.25s.21.27.21.35c0 .11-.1.38-.54.53-.63.21-1.46.83-1.46 1.87a1 1 0 0 0 2 .08l.02-.02.09-.04C14.1 10.18 15 9.3 15 8.1c0-1.63-1.56-2.6-3-2.6" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 5.5c1.44 0 3 .97 3 2.6 0 1.2-.9 2.08-1.89 2.42l-.09.04-.02.02a1 1 0 0 1-2-.08c0-1.04.83-1.66 1.46-1.87.44-.15.54-.42.54-.53 0-.08-.04-.21-.21-.35A1.3 1.3 0 0 0 12 7.5c-.67 0-1 .38-1.03.53a1 1 0 0 1-1.94-.5c.33-1.3 1.7-2.03 2.97-2.03" />
    </IconBase>
  ))
);

ChatBoxQuestionFillDuotone.displayName = 'ChatBoxQuestionFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxQuestionFillDuotone, ChatBoxQuestionFillDuotone as ChatBoxQuestionFillDuotoneIcon, ChatBoxQuestionFillDuotone as SiChatBoxQuestionFillDuotone };
export type { ChatBoxQuestionFillDuotoneProps };
