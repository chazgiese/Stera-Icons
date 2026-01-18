import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReplyBoldProps = Omit<IconBaseProps, 'children'>;

const ReplyBold = memo(
  forwardRef<SVGSVGElement, ReplyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.3 3.3A1 1 0 0 1 12 4v4.51c3.27.09 5.8.63 7.49 2.2C21.39 12.43 22 15.2 22 19a1 1 0 0 1-1.91.4l-.01-.01-.06-.1q-.08-.16-.26-.44a7 7 0 0 0-1.18-1.36A8 8 0 0 0 13 15.5h-1V20a1 1 0 0 1-1.7.7l-8-8a1 1 0 0 1 0-1.4zM4.4 12 10 17.59V14.5a1 1 0 0 1 1-1h2c3.19 0 5.38 1.17 6.8 2.4-.28-1.8-.83-2.96-1.66-3.73-1.26-1.15-3.4-1.67-7.14-1.67a1 1 0 0 1-1-1V6.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReplyBold.displayName = 'ReplyBold';

export { ReplyBold };
export type { ReplyBoldProps };
