import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CommentBubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 0 1 0 20H9a1 1 0 1 0 0-2h3a8 8 0 1 0-8-8v3a1 1 0 1 0-2 0v-3A10 10 0 0 1 12 2" opacity={.4} />
        <path fill="currentColor" d="M3 14a1 1 0 0 1 1 1v2.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H9a1 1 0 1 1 0 2H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V15a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CommentBubbleBoldDuotone.displayName = 'CommentBubbleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CommentBubbleBoldDuotone, CommentBubbleBoldDuotone as CommentBubbleBoldDuotoneIcon, CommentBubbleBoldDuotone as SiCommentBubbleBoldDuotone };
export type { CommentBubbleBoldDuotoneProps };
