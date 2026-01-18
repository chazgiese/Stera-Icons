import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleOffBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffBold = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.3 1.3a1 1 0 0 1 1.4 0l19 19a1 1 0 1 1-1.4 1.4l-2.45-2.44a12.14 12.14 0 0 1-9.15 1.06l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89c0-2.32.9-4.45 2.36-6.12L1.29 2.71a1 1 0 0 1 0-1.42m3.48 4.89A7.2 7.2 0 0 0 3 10.89c0 1.52.5 2.95 1.36 4.16.8 1.14.97 1.97.88 2.54l-.05.25-.01.03-.01.03v.01l-.56 2.22 3.55-1.77.09-.04a1 1 0 0 1 .66-.02 10 10 0 0 0 7.46-.52z" clipRule="evenodd" />
        <path fill="currentColor" d="M12 1c5.96 0 11 4.32 11 9.89 0 2.13-.75 4.1-2 5.7a1 1 0 0 1-1.58-1.24A7.2 7.2 0 0 0 21 10.9C21 6.64 17.08 3 12 3c-1.56 0-3.01.35-4.28.95a1 1 0 1 1-.86-1.8A12 12 0 0 1 12 1" />
    </IconBase>
  ))
);

ChatBubbleOffBold.displayName = 'ChatBubbleOffBold';

export { ChatBubbleOffBold };
export type { ChatBubbleOffBoldProps };
