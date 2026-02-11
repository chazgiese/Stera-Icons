import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleBoldProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleBold = memo(
  forwardRef<SVGSVGElement, CommentBubbleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="comment-bubble-bold" {...props}>
      <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 0 1 0 19H5.93q-.53.01-.93-.04A3 3 0 0 1 2.54 19q-.05-.4-.04-.93V12A9.5 9.5 0 0 1 12 2.5m0 2A7.5 7.5 0 0 0 4.5 12v6.07l.01.6a1 1 0 0 0 .82.82l.6.01H12a7.5 7.5 0 0 0 0-15" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleBold.displayName = 'CommentBubbleBold';

// Triple export pattern (lucide-react style)
export { CommentBubbleBold, CommentBubbleBold as CommentBubbleBoldIcon, CommentBubbleBold as SiCommentBubbleBold };
export default CommentBubbleBold;
export type { CommentBubbleBoldProps };
