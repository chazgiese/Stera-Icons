import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxAlertRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxAlertRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxAlertRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-alert-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.6q.01 1.37-.04 2.24-.04.88-.32 1.58a4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.8.05-2.01.04l-4.57 3.04q-.29.2-.53.34c-.16.08-.4.2-.7.18q-.57-.04-.93-.49a1.3 1.3 0 0 1-.23-.68q-.02-.27-.02-.64v-1.75q-.87 0-1.49-.04c-.6-.04-1.1-.12-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58q-.05-.87-.04-2.24v-.6q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-5.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v.6c0 .94 0 1.61.04 2.14.03.52.1.84.2 1.1.34.8.97 1.43 1.77 1.76.26.11.58.18 1.1.21.53.04 1.2.04 2.14.04.41 0 .75.34.75.75v2.6l.08-.05 4.75-3.17.1-.06q.14-.07.32-.07c.94 0 1.61 0 2.14-.04.52-.03.84-.1 1.1-.2.8-.34 1.43-.97 1.76-1.77.11-.26.18-.58.21-1.1.04-.53.04-1.2.04-2.14v-.6c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 12.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M12 6.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChatBoxAlertRegularDuotone.displayName = 'ChatBoxAlertRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxAlertRegularDuotone, ChatBoxAlertRegularDuotone as ChatBoxAlertRegularDuotoneIcon, ChatBoxAlertRegularDuotone as SiChatBoxAlertRegularDuotone };
export default ChatBoxAlertRegularDuotone;
export type { ChatBoxAlertRegularDuotoneProps };
