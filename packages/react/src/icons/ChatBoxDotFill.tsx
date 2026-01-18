import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxDotFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotFill = memo(
  forwardRef<SVGSVGElement, ChatBoxDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.4 2A5.5 5.5 0 0 0 23 8.77v2.83q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2z" />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChatBoxDotFill.displayName = 'ChatBoxDotFill';

// Triple export pattern (lucide-react style)
export { ChatBoxDotFill, ChatBoxDotFill as ChatBoxDotFillIcon, ChatBoxDotFill as SiChatBoxDotFill };
export type { ChatBoxDotFillProps };
