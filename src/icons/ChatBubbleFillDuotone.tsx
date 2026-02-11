import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-fill-duotone" {...props}>
      <path d="M12 4c4.53 0 8 3.24 8 7s-3.47 7-8 7q-1.1 0-2.1-.24a1 1 0 0 0-.6.04l-4.05 1.62.47-3.02a2 2 0 0 0-.4-1.56A6.4 6.4 0 0 1 4 11c0-3.76 3.47-7 8-7" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04q1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleFillDuotone.displayName = 'ChatBubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleFillDuotone, ChatBubbleFillDuotone as ChatBubbleFillDuotoneIcon, ChatBubbleFillDuotone as SiChatBubbleFillDuotone };
export default ChatBubbleFillDuotone;
export type { ChatBubbleFillDuotoneProps };
