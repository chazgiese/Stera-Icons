import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dashed-fill-duotone" {...props}>
      <path d="M12 5.5c3.4 0 6.5 2.28 6.5 5.5s-3.1 5.5-6.5 5.5-6.5-2.28-6.5-5.5S8.6 5.5 12 5.5" opacity={.4} />
        <path d="M4.95 14.81a1 1 0 0 1 .84 1.14l-.53 3.47L9.3 17.8a1 1 0 0 1 .75 1.86L6 21.28a2 2 0 0 1-2.72-2.16l.53-3.47a1 1 0 0 1 1.14-.84M14.01 17.78a1 1 0 0 1 .45 1.95q-.84.18-1.73.25a1 1 0 0 1-.13-2q.73-.05 1.41-.2M18.7 14.83a1 1 0 0 1 1.6 1.2 10 10 0 0 1-2.61 2.37 1 1 0 1 1-1.06-1.7 8 8 0 0 0 2.06-1.87M2.96 10.28a1 1 0 0 1 1.04.96q.02.8.3 1.64a1 1 0 0 1-1.92.6A8 8 0 0 1 2 11.31a1 1 0 0 1 .96-1.03M20.58 8.37a1 1 0 0 1 1.2.74 8 8 0 0 1 .02 3.68 1 1 0 1 1-1.95-.43 6 6 0 0 0-.02-2.79 1 1 0 0 1 .75-1.2M5.97 3.93a1 1 0 0 1 1.15 1.64A8 8 0 0 0 4.8 8.06a1 1 0 0 1-1.74-.99 10 10 0 0 1 2.91-3.14M15.93 3.74a1 1 0 0 1 1.36-.38 10 10 0 0 1 2.83 2.39A1 1 0 0 1 18.56 7a8 8 0 0 0-2.25-1.9 1 1 0 0 1-.38-1.36M12 2q.93 0 1.83.15a1 1 0 1 1-.33 1.97 9 9 0 0 0-3.21.06 1 1 0 1 1-.42-1.95Q10.9 2 12 2" />
    </IconBase>
  ))
);

ChatBubbleDashedFillDuotone.displayName = 'ChatBubbleDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashedFillDuotone, ChatBubbleDashedFillDuotone as ChatBubbleDashedFillDuotoneIcon, ChatBubbleDashedFillDuotone as SiChatBubbleDashedFillDuotone };
export default ChatBubbleDashedFillDuotone;
export type { ChatBubbleDashedFillDuotoneProps };
