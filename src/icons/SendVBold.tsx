import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendVBoldProps = Omit<IconBaseProps, 'children'>;

const SendVBold = memo(
  forwardRef<SVGSVGElement, SendVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.99 2.79a2.25 2.25 0 0 1 4.02 0l8.1 16.2a2.25 2.25 0 0 1-3.09 2.98L12 18.14l-7.02 3.83a2.25 2.25 0 0 1-3.1-2.98zm2.23.9a.25.25 0 0 0-.44 0l-8.1 16.2a.2.2 0 0 0-.03.15q0 .07.08.13.07.07.13.08t.16-.04l6.98-3.8V10a1 1 0 1 1 2 0v6.4l6.98 3.81q.1.05.16.04t.13-.08q.07-.06.08-.13.02-.05-.03-.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendVBold.displayName = 'SendVBold';

// Triple export pattern (lucide-react style)
export { SendVBold, SendVBold as SendVBoldIcon, SendVBold as SiSendVBold };
export default SendVBold;
export type { SendVBoldProps };
