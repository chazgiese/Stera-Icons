import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBubbleDotRegularProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotRegular = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25q.65 0 1.28.07a.75.75 0 0 1-.16 1.49A11 11 0 0 0 12 2.75c-5.2 0-9.25 3.72-9.25 8.14a7.4 7.4 0 0 0 1.4 4.3c.79 1.11.92 1.87.85 2.36l-.05.22-.03.09-.55 2.21c-.06.2.16.38.35.29l3.55-1.78.14-.05a1 1 0 0 1 .42 0q1.5.49 3.17.5c5.2 0 9.25-3.73 9.25-8.14v-.1a.75.75 0 0 1 1.5-.03v.13c0 5.4-4.9 9.64-10.75 9.64q-1.75-.01-3.33-.47L5.4 21.7a1.75 1.75 0 0 1-2.48-2l.55-2.2.03-.1v-.03l.02-.02v-.02c0-.03.02-.42-.58-1.26a9 9 0 0 1-1.68-5.18c0-5.4 4.9-9.64 10.75-9.64" />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChatBubbleDotRegular.displayName = 'ChatBubbleDotRegular';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotRegular, ChatBubbleDotRegular as ChatBubbleDotRegularIcon, ChatBubbleDotRegular as SiChatBubbleDotRegular };
export type { ChatBubbleDotRegularProps };
