import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleQuestionBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1m0 2c-5.08 0-9 3.64-9 7.89 0 1.52.5 2.95 1.36 4.16.8 1.14.97 1.97.88 2.54l-.05.25-.01.03-.01.03v.01l-.56 2.22 3.55-1.77.09-.04a1 1 0 0 1 .66-.02q1.45.46 3.09.48c5.08 0 9-3.64 9-7.9C21 6.65 17.08 3 12 3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6c1.44 0 3 .97 3 2.6 0 1.2-.9 2.08-1.89 2.42l-.09.04-.02.02a1 1 0 0 1-2-.08c0-1.04.83-1.66 1.46-1.87.44-.15.54-.42.54-.53 0-.08-.04-.21-.21-.35A1.3 1.3 0 0 0 12 8c-.67 0-1 .38-1.03.53a1 1 0 0 1-1.94-.5C9.36 6.73 10.73 6 12 6" />
    </IconBase>
  ))
);

ChatBubbleQuestionBoldDuotone.displayName = 'ChatBubbleQuestionBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionBoldDuotone, ChatBubbleQuestionBoldDuotone as ChatBubbleQuestionBoldDuotoneIcon, ChatBubbleQuestionBoldDuotone as SiChatBubbleQuestionBoldDuotone };
export type { ChatBubbleQuestionBoldDuotoneProps };
