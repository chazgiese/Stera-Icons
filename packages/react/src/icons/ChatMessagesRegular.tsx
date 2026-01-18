import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatMessagesRegularProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesRegular = memo(
  forwardRef<SVGSVGElement, ChatMessagesRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25A4.75 4.75 0 0 1 16.75 8v1.25H18A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.09.67L20.3 20a2 2 0 0 0-1-.24H12A4.75 4.75 0 0 1 7.25 15v-1.25H4.72q-.54 0-1 .24l-1.38.68A.75.75 0 0 1 1.25 14V8A4.75 4.75 0 0 1 6 3.25zm0 7.5A3.25 3.25 0 0 0 8.75 14v1c0 1.8 1.46 3.25 3.25 3.25h7.3q.87 0 1.67.4l.28.14V14c0-1.8-1.46-3.25-3.25-3.25zm-6-6A3.25 3.25 0 0 0 2.75 8v4.79l.28-.14q.8-.4 1.68-.4h2.87l.14-.31v-.02l.16-.28.03-.05.15-.25.04-.05.18-.24.02-.03.2-.23.05-.05.18-.19.04-.04.2-.17.08-.06.22-.17.06-.04.24-.15.05-.03q.28-.16.58-.29l.04-.01.3-.11.04-.01a5 5 0 0 1 .65-.16h.07q.15-.04.32-.04h.03l.35-.02h3.24l.01-.25V8c0-1.8-1.46-3.25-3.25-3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatMessagesRegular.displayName = 'ChatMessagesRegular';

export { ChatMessagesRegular };
export type { ChatMessagesRegularProps };
