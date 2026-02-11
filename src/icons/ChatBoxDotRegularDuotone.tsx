import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxDotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dot-duotone" {...props}>
      <path d="M13.22 3.25a.75.75 0 0 1 0 1.5H9.4c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v.6c0 .94 0 1.61.04 2.14.03.52.1.84.2 1.1.34.8.97 1.43 1.77 1.76.26.11.58.18 1.1.21.53.04 1.2.04 2.14.04.41 0 .75.34.75.75v2.6l4.83-3.22.12-.07h.01l.1-.04h.07q.06-.03.12-.02c.94 0 1.61 0 2.14-.04.52-.03.84-.1 1.1-.2.8-.34 1.43-.97 1.76-1.77.11-.26.18-.58.21-1.1.04-.53.04-1.2.04-2.14v-.6a.75.75 0 0 1 1.5 0v.6q.01 1.37-.04 2.24-.04.88-.32 1.58a4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.8.05-2.01.04l-5.04 3.36a1.25 1.25 0 0 1-1.94-1.04v-2.32q-.87 0-1.49-.04c-.6-.04-1.1-.12-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58q-.05-.87-.04-2.24v-.6q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" opacity={.4} />
        <path d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBoxDotRegularDuotone.displayName = 'ChatBoxDotRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxDotRegularDuotone, ChatBoxDotRegularDuotone as ChatBoxDotRegularDuotoneIcon, ChatBoxDotRegularDuotone as SiChatBoxDotRegularDuotone };
export default ChatBoxDotRegularDuotone;
export type { ChatBoxDotRegularDuotoneProps };
