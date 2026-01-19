import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendHRegularProps = Omit<IconBaseProps, 'children'>;

const SendHRegular = memo(
  forwardRef<SVGSVGElement, SendHRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.25 4.86A2 2 0 0 1 4.9 2.1l16.2 8.1a2 2 0 0 1 0 3.58l-16.2 8.1a2 2 0 0 1-2.65-2.75L6.15 12zm1.98-1.4a.5.5 0 0 0-.66.68l3.88 7.11H14a.75.75 0 0 1 0 1.5H7.45l-3.88 7.11a.5.5 0 0 0 .66.69l16.2-8.1a.5.5 0 0 0 0-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHRegular.displayName = 'SendHRegular';

// Triple export pattern (lucide-react style)
export { SendHRegular, SendHRegular as SendHRegularIcon, SendHRegular as SiSendHRegular };
export type { SendHRegularProps };
