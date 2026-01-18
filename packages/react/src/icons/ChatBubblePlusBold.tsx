import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubblePlusBoldProps = Omit<IconBaseProps, 'children'>;

const ChatBubblePlusBold = memo(
  forwardRef<SVGSVGElement, ChatBubblePlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1c5.96 0 11 4.32 11 9.89s-5.04 9.89-11 9.89q-1.73 0-3.3-.46l-3.2 1.6a2 2 0 0 1-2.83-2.27l.55-2.22.03-.1.01-.03v-.01c0-.09-.07-.43-.53-1.08A9 9 0 0 1 1 10.89C1 5.32 6.04 1 12 1m0 2c-5.08 0-9 3.64-9 7.89 0 1.52.5 2.95 1.36 4.16.8 1.14.97 1.97.88 2.54l-.05.25-.01.03-.01.03v.01l-.56 2.22 3.55-1.77.09-.04a1 1 0 0 1 .66-.02q1.45.46 3.09.48c5.08 0 9-3.64 9-7.9C21 6.65 17.08 3 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubblePlusBold.displayName = 'ChatBubblePlusBold';

export { ChatBubblePlusBold };
export type { ChatBubblePlusBoldProps };
