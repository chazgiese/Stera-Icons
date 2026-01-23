import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReplyRegularDuotone = memo(
  forwardRef<SVGSVGElement, ReplyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="reply-duotone" {...props}>
      <path fill="currentColor" d="M11.75 8.76c3.38.06 5.9.59 7.57 2.13 1.81 1.66 2.43 4.32 2.43 8.11a.75.75 0 0 1-1.43.3l-.02-.02a3 3 0 0 0-.33-.57c-.25-.38-.65-.89-1.22-1.4A8.3 8.3 0 0 0 13 15.25h-1.25v-.75a.75.75 0 0 0-.75-.75h2a9.8 9.8 0 0 1 7.13 2.81c-.23-2.24-.83-3.66-1.83-4.57-1.33-1.23-3.56-1.74-7.3-1.74.41 0 .75-.34.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M10.47 3.47a.75.75 0 0 1 1.28.53v5.5a.75.75 0 0 1-1.5 0V5.81L4.06 12l6.19 6.19V14.5a.75.75 0 0 1 1.5 0V20a.75.75 0 0 1-1.28.53l-8-8a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ReplyRegularDuotone.displayName = 'ReplyRegularDuotone';

// Triple export pattern (lucide-react style)
export { ReplyRegularDuotone, ReplyRegularDuotone as ReplyRegularDuotoneIcon, ReplyRegularDuotone as SiReplyRegularDuotone };
export default ReplyRegularDuotone;
export type { ReplyRegularDuotoneProps };
