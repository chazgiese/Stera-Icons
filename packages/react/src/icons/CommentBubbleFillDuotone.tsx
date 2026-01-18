import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommentBubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a8 8 0 0 1 0 16H5.57c-.58 0-.71 0-.8-.03a1 1 0 0 1-.74-.75c-.02-.08-.03-.2-.03-.8V12a8 8 0 0 1 8-8" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 0 1 0 20H5.57q-.7.02-1.24-.08a3 3 0 0 1-2.25-2.25C1.99 19.3 2 18.9 2 18.43V12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8v6.43c0 .58 0 .71.03.8a1 1 0 0 0 .75.74c.08.02.2.03.8.03H12a8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleFillDuotone.displayName = 'CommentBubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { CommentBubbleFillDuotone, CommentBubbleFillDuotone as CommentBubbleFillDuotoneIcon, CommentBubbleFillDuotone as SiCommentBubbleFillDuotone };
export type { CommentBubbleFillDuotoneProps };
