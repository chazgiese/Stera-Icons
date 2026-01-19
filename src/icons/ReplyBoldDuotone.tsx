import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReplyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReplyBoldDuotone = memo(
  forwardRef<SVGSVGElement, ReplyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="reply-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 8.51c3.27.09 5.8.63 7.49 2.2C21.39 12.43 22 15.2 22 19a1 1 0 0 1-1.91.4l-.01-.01a3 3 0 0 0-.32-.54 7 7 0 0 0-1.18-1.36A8 8 0 0 0 13 15.5h-1v-1a1 1 0 0 0-1-1h2c3.19 0 5.38 1.17 6.8 2.4-.28-1.8-.83-2.96-1.66-3.73-1.26-1.15-3.4-1.67-7.14-1.67a1 1 0 0 0 1-1z" opacity={.4} />
        <path fill="currentColor" d="M10.3 3.3A1 1 0 0 1 12 4v5.5a1 1 0 0 1-2 0V6.41L4.41 12 10 17.59V14.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1.7.7l-8-8a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ReplyBoldDuotone.displayName = 'ReplyBoldDuotone';

// Triple export pattern (lucide-react style)
export { ReplyBoldDuotone, ReplyBoldDuotone as ReplyBoldDuotoneIcon, ReplyBoldDuotone as SiReplyBoldDuotone };
export type { ReplyBoldDuotoneProps };
