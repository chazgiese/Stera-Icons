import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendBoldProps = Omit<IconBaseProps, 'children'>;

const SendBold = memo(
  forwardRef<SVGSVGElement, SendBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.18 2.11a2.14 2.14 0 0 1 2.7 2.71l-5.23 15.71c-.66 2-3.5 1.94-4.09-.07l-2.05-6.97-6.97-2.05a2.14 2.14 0 0 1-.07-4.1zm.63 1.9L4.1 9.25q-.07.02-.08.05L4 9.38q0 .07.03.1l.07.04 6.93 2.04 4.26-4.27a1 1 0 0 1 1.42 1.42l-4.27 4.26 2.04 6.93q.03.07.05.07.01.03.09.03l.08-.02q.03-.01.05-.08L20 4.2v-.08l-.03-.07-.07-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendBold.displayName = 'SendBold';

// Triple export pattern (lucide-react style)
export { SendBold, SendBold as SendBoldIcon, SendBold as SiSendBold };
export default SendBold;
export type { SendBoldProps };
