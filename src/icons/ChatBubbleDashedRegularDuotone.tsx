import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-dashed-duotone" {...props}>
      <path d="M13.73 18.89a.75.75 0 1 1 .24 1.48q-.96.16-1.97.16a.75.75 0 0 1 0-1.5q.89 0 1.73-.14M2.02 11.85c.4-.1.8.17.89.57q.2.98.75 1.99a.75.75 0 0 1-1.32.72 9 9 0 0 1-.9-2.4c-.09-.4.17-.8.58-.88M21.61 8.32c.4-.1.8.15.9.56a9 9 0 0 1 0 4.02.75.75 0 1 1-1.45-.34 7 7 0 0 0 0-3.34c-.1-.4.15-.8.55-.9M12 1.25q1 0 1.97.16a.75.75 0 1 1-.24 1.48q-.84-.15-1.73-.14-1.1 0-2.15.26a.75.75 0 0 1-.35-1.46q1.22-.3 2.5-.3" opacity={0.4} />
        <path fill="currentColor" d="M3.5 17.37a.75.75 0 0 1 1.45.37l-.58 2.33c-.06.2.16.38.35.29l3.55-1.78a.75.75 0 1 1 .67 1.34L5.4 21.7a1.75 1.75 0 0 1-2.48-2zM19.57 15.56a.75.75 0 0 1 1.17.94 10 10 0 0 1-3.04 2.56.75.75 0 0 1-.73-1.3 9 9 0 0 0 2.6-2.2M5.03 3.74a.75.75 0 0 1 .93 1.17 9 9 0 0 0-2.63 3.37.75.75 0 0 1-1.38-.59C2.61 6.16 3.7 4.8 5.03 3.74M16.68 3a.75.75 0 0 1 1.02-.28q1.8 1 3.04 2.56a.75.75 0 1 1-1.17.93 9 9 0 0 0-2.6-2.19.75.75 0 0 1-.29-1.02" />
    </IconBase>
  ))
);

ChatBubbleDashedRegularDuotone.displayName = 'ChatBubbleDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashedRegularDuotone, ChatBubbleDashedRegularDuotone as ChatBubbleDashedRegularDuotoneIcon, ChatBubbleDashedRegularDuotone as SiChatBubbleDashedRegularDuotone };
export type { ChatBubbleDashedRegularDuotoneProps };
