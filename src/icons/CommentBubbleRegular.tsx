import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleRegularProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleRegular = memo(
  forwardRef<SVGSVGElement, CommentBubbleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5H5.57q-.72.02-1.18-.07a2.8 2.8 0 0 1-2.07-2.07q-.09-.47-.07-1.18V12A9.75 9.75 0 0 1 12 2.25m0 1.5A8.25 8.25 0 0 0 3.75 12v6.43c0 .57 0 .73.03.85.1.47.47.83.94.94.12.03.28.03.85.03H12a8.25 8.25 0 1 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleRegular.displayName = 'CommentBubbleRegular';

// Triple export pattern (lucide-react style)
export { CommentBubbleRegular, CommentBubbleRegular as CommentBubbleRegularIcon, CommentBubbleRegular as SiCommentBubbleRegular };
export default CommentBubbleRegular;
export type { CommentBubbleRegularProps };
