import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxQuestionBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBoxQuestionBold = memo(
  forwardRef<SVGSVGElement, ChatBoxQuestionBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 13.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6c1.44 0 3 .97 3 2.6 0 1.2-.9 2.08-1.89 2.42l-.09.04-.02.02a1 1 0 0 1-2-.08c0-1.04.83-1.66 1.46-1.87.44-.15.54-.42.54-.53 0-.08-.04-.21-.21-.35A1.3 1.3 0 0 0 12 8c-.67 0-1 .38-1.03.53a1 1 0 0 1-1.94-.5C9.36 6.73 10.73 6 12 6" />
        <path fill="currentColor" fillRule="evenodd" d="M15.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v2.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-4.97 3.31A1.5 1.5 0 0 1 8 21.07V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 1.99 8.4 2zM8.4 4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C3 7.47 3 8.26 3 9.4v2.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H9a1 1 0 0 1 1 1v2.13l4.45-2.96A1 1 0 0 1 15 17h.6c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C17.53 4 16.74 4 15.6 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxQuestionBold.displayName = 'ChatBoxQuestionBold';

export { ChatBoxQuestionBold };
export type { ChatBoxQuestionBoldProps };
