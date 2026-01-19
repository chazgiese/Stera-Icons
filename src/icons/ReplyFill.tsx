import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReplyFillProps = Omit<IconBaseProps, 'children'>;

const ReplyFill = memo(
  forwardRef<SVGSVGElement, ReplyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="reply-fill" {...props}>
      <path fill="currentColor" d="M10.3 3.3A1 1 0 0 1 12 4v4.51c3.27.09 5.8.63 7.49 2.2C21.39 12.43 22 15.2 22 19a1 1 0 0 1-1.91.4l-.01-.01-.06-.1q-.08-.16-.26-.44a7 7 0 0 0-1.18-1.36A8 8 0 0 0 13 15.5h-1V20a1 1 0 0 1-1.7.7l-8-8a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ReplyFill.displayName = 'ReplyFill';

// Triple export pattern (lucide-react style)
export { ReplyFill, ReplyFill as ReplyFillIcon, ReplyFill as SiReplyFill };
export default ReplyFill;
export type { ReplyFillProps };
