import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatMessagesFillProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesFill = memo(
  forwardRef<SVGSVGElement, ChatMessagesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3a5 5 0 0 1 5 5v1.25h1A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.09.67L20.3 20a2 2 0 0 0-1-.24H12A4.75 4.75 0 0 1 7.25 15v-1H4.71a2 2 0 0 0-.9.21l-1.36.68A1 1 0 0 1 1 14V8a5 5 0 0 1 4.74-5H12M6 5h-.15A3 3 0 0 0 3 8v4.38A4 4 0 0 1 4.7 12h3A4.8 4.8 0 0 1 12 9.25h2.99L15 9V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatMessagesFill.displayName = 'ChatMessagesFill';

export { ChatMessagesFill };
export type { ChatMessagesFillProps };
