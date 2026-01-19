import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReplyRegularProps = Omit<IconBaseProps, 'children'>;

const ReplyRegular = memo(
  forwardRef<SVGSVGElement, ReplyRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="reply" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.47 3.47a.75.75 0 0 1 1.28.53v4.76c3.38.06 5.9.59 7.57 2.13 1.81 1.66 2.43 4.32 2.43 8.11a.75.75 0 0 1-1.43.3l-.02-.02a4 4 0 0 0-.33-.57c-.25-.38-.65-.89-1.22-1.4A8.3 8.3 0 0 0 13 15.25h-1.25V20a.75.75 0 0 1-1.28.53l-8-8a.75.75 0 0 1 0-1.06zM4.07 12l6.18 6.19V14.5c0-.41.34-.75.75-.75h2a9.8 9.8 0 0 1 7.13 2.8c-.23-2.23-.83-3.65-1.83-4.56-1.33-1.23-3.56-1.74-7.3-1.74a.75.75 0 0 1-.75-.75V5.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReplyRegular.displayName = 'ReplyRegular';

// Triple export pattern (lucide-react style)
export { ReplyRegular, ReplyRegular as ReplyRegularIcon, ReplyRegular as SiReplyRegular };
export type { ReplyRegularProps };
