import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble-bold-duotone" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 1 0 19H5.93a1 1 0 0 0 0-2H12A7.5 7.5 0 1 0 4.5 12v6.07a1 1 0 0 0-2 0V12A9.5 9.5 0 0 1 12 2.5" opacity={.4} />
        <path d="M3.5 17.07a1 1 0 0 1 1 1l.01.6a1 1 0 0 0 .82.82l.6.01a1 1 0 0 1 0 2q-.53.01-.93-.04A3 3 0 0 1 2.54 19q-.05-.4-.04-.93a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CommentBubbleBoldDuotone.displayName = 'CommentBubbleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CommentBubbleBoldDuotone, CommentBubbleBoldDuotone as CommentBubbleBoldDuotoneIcon, CommentBubbleBoldDuotone as SiCommentBubbleBoldDuotone };
export default CommentBubbleBoldDuotone;
export type { CommentBubbleBoldDuotoneProps };
