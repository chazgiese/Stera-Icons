import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble-duotone" {...props}>
      <path d="M12 2.75a9.25 9.25 0 0 1 0 18.5H5.93a.75.75 0 0 0 0-1.5H12A7.75 7.75 0 1 0 4.25 12v6.07a.75.75 0 0 0-1.5 0V12c0-5.1 4.14-9.25 9.25-9.25" opacity={.4} />
        <path d="M3.5 17.32c.41 0 .75.34.75.75 0 .43 0 .55.02.64.09.52.5.93 1.02 1.02.09.02.21.02.64.02a.75.75 0 0 1 0 1.5q-.54.01-.9-.04a2.75 2.75 0 0 1-2.24-2.25q-.05-.35-.04-.89c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CommentBubbleRegularDuotone.displayName = 'CommentBubbleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CommentBubbleRegularDuotone, CommentBubbleRegularDuotone as CommentBubbleRegularDuotoneIcon, CommentBubbleRegularDuotone as SiCommentBubbleRegularDuotone };
export default CommentBubbleRegularDuotone;
export type { CommentBubbleRegularDuotoneProps };
