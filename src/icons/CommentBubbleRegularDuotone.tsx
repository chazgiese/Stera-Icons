import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25a9.75 9.75 0 1 1 0 19.5H9a.75.75 0 0 0 0-1.5h3A8.25 8.25 0 1 0 3.75 12v3a.75.75 0 0 0-1.5 0v-3A9.75 9.75 0 0 1 12 2.25" opacity={.4} />
        <path fill="currentColor" d="M3 14.25c.41 0 .75.34.75.75v3.53l.02.52c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H9a.75.75 0 0 1 0 1.5H6.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.02-.27-.03-.62V15c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CommentBubbleRegularDuotone.displayName = 'CommentBubbleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CommentBubbleRegularDuotone, CommentBubbleRegularDuotone as CommentBubbleRegularDuotoneIcon, CommentBubbleRegularDuotone as SiCommentBubbleRegularDuotone };
export default CommentBubbleRegularDuotone;
export type { CommentBubbleRegularDuotoneProps };
