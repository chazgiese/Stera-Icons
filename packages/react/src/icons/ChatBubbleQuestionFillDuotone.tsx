import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1m0 12.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 6c-1.26 0-2.64.72-2.97 2.03a1 1 0 0 0 1.94.5c.04-.15.36-.53 1.03-.53q.52.02.79.25c.17.14.21.27.21.35 0 .11-.1.38-.54.53-.63.21-1.46.83-1.46 1.87a1 1 0 0 0 2 .08l.02-.02.09-.04C14.1 10.68 15 9.8 15 8.6 15 6.97 13.44 6 12 6" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6c1.44 0 3 .97 3 2.6 0 1.2-.9 2.08-1.89 2.42l-.09.04-.02.02a1 1 0 0 1-2-.08c0-1.04.83-1.66 1.46-1.87.44-.15.54-.42.54-.53 0-.08-.04-.21-.21-.35A1.3 1.3 0 0 0 12 8c-.67 0-1 .38-1.03.53a1 1 0 0 1-1.94-.5C9.36 6.73 10.73 6 12 6" />
    </IconBase>
  ))
);

ChatBubbleQuestionFillDuotone.displayName = 'ChatBubbleQuestionFillDuotone';

export { ChatBubbleQuestionFillDuotone };
export type { ChatBubbleQuestionFillDuotoneProps };
