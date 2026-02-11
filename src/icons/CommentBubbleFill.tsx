import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleFillProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFill = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble-fill" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 1 0 19H5.93q-.53.01-.93-.04A3 3 0 0 1 2.54 19q-.05-.4-.04-.93V12A9.5 9.5 0 0 1 12 2.5" />
    </IconBase>
  ))
);

CommentBubbleFill.displayName = 'CommentBubbleFill';

// Triple export pattern (lucide-react style)
export { CommentBubbleFill, CommentBubbleFill as CommentBubbleFillIcon, CommentBubbleFill as SiCommentBubbleFill };
export default CommentBubbleFill;
export type { CommentBubbleFillProps };
