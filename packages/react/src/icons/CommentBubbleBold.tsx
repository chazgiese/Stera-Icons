import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommentBubbleBoldProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleBold = memo(
  forwardRef<SVGSVGElement, CommentBubbleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 0 1 0 20H5.57q-.7.02-1.24-.08a3 3 0 0 1-2.25-2.25C1.99 19.3 2 18.9 2 18.43V12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8v6.43c0 .58 0 .71.03.8a1 1 0 0 0 .75.74c.08.02.2.03.8.03H12a8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleBold.displayName = 'CommentBubbleBold';

// Triple export pattern (lucide-react style)
export { CommentBubbleBold, CommentBubbleBold as CommentBubbleBoldIcon, CommentBubbleBold as SiCommentBubbleBold };
export type { CommentBubbleBoldProps };
