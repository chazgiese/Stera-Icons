import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleRegularProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleRegular = memo(
  forwardRef<SVGSVGElement, CommentBubbleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 1 0 18.5H5.93q-.54.01-.9-.04a2.75 2.75 0 0 1-2.24-2.25q-.05-.35-.04-.89V12c0-5.1 4.14-9.25 9.25-9.25m0 1.5A7.75 7.75 0 0 0 4.25 12v6.07c0 .43 0 .55.02.64.09.52.5.93 1.02 1.02.09.02.21.02.64.02H12a7.75 7.75 0 0 0 0-15.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleRegular.displayName = 'CommentBubbleRegular';

// Triple export pattern (lucide-react style)
export { CommentBubbleRegular, CommentBubbleRegular as CommentBubbleRegularIcon, CommentBubbleRegular as SiCommentBubbleRegular };
export default CommentBubbleRegular;
export type { CommentBubbleRegularProps };
