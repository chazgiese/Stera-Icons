import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.8q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-.3l-5.36 3.57c-.78.52-1.8.03-1.93-.86L8 21.53V19q-1.37.01-2.3-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 13.25 1 11.6V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 2 6.8 2zM12 12.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 6a1 1 0 0 0-1 1v3.1a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6a1 1 0 0 1 1 1v3.1a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChatBoxAlertFillDuotone.displayName = 'ChatBoxAlertFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxAlertFillDuotone, ChatBoxAlertFillDuotone as ChatBoxAlertFillDuotoneIcon, ChatBoxAlertFillDuotone as SiChatBoxAlertFillDuotone };
export type { ChatBoxAlertFillDuotoneProps };
