import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommentBubbleFillProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFill = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 0 1 0 20H5.57q-.7.02-1.24-.08a3 3 0 0 1-2.25-2.25C1.99 19.3 2 18.9 2 18.43V12A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

CommentBubbleFill.displayName = 'CommentBubbleFill';

export { CommentBubbleFill };
export type { CommentBubbleFillProps };
