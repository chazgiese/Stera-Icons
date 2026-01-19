import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.6 4c1.14 0 1.93 0 2.55.05.6.05.95.14 1.21.28a3 3 0 0 1 1.31 1.3c.14.27.23.62.28 1.22.05.62.05 1.41.05 2.55v2.2c0 1.14 0 1.93-.05 2.55-.05.6-.14.95-.28 1.21a3 3 0 0 1-1.3 1.31 3 3 0 0 1-1.22.28c-.62.05-1.41.05-2.55.05q-.9 0-1.65.5L10 20.13V18a1 1 0 0 0-1-1h-.6c-1.14 0-1.93 0-2.55-.05a3 3 0 0 1-1.21-.28 3 3 0 0 1-1.31-1.3 3 3 0 0 1-.28-1.22C3 13.53 3 12.74 3 11.6V9.4c0-1.14 0-1.93.05-2.55.05-.6.14-.95.28-1.21a3 3 0 0 1 1.3-1.31 3 3 0 0 1 1.22-.28C6.47 4 7.26 4 8.4 4z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v2.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06-.3 0-.54.16l-4.73 3.15A1.5 1.5 0 0 1 8 21.07V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 1.99 8.4 2zM8.4 4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C3 7.47 3 8.26 3 9.4v2.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H9a1 1 0 0 1 1 1v2.13l3.95-2.63q.75-.5 1.65-.5c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C17.53 4 16.74 4 15.6 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxFillDuotone.displayName = 'ChatBoxFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxFillDuotone, ChatBoxFillDuotone as ChatBoxFillDuotoneIcon, ChatBoxFillDuotone as SiChatBoxFillDuotone };
export type { ChatBoxFillDuotoneProps };
