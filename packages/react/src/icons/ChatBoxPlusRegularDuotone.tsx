import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v2.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-.37l-5.04 3.36a1.25 1.25 0 0 1-1.94-1.04v-2.32q-1.55.02-2.54-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-7.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v2.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05H9c.41 0 .75.34.75.75v2.6l4.83-3.22a1 1 0 0 1 .42-.13h.6c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.75c.41 0 .75.34.75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V7.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChatBoxPlusRegularDuotone.displayName = 'ChatBoxPlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxPlusRegularDuotone, ChatBoxPlusRegularDuotone as ChatBoxPlusRegularDuotoneIcon, ChatBoxPlusRegularDuotone as SiChatBoxPlusRegularDuotone };
export type { ChatBoxPlusRegularDuotoneProps };
