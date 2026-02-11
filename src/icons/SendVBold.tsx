import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVBoldProps = Omit<IconBaseProps, 'children'>;

const SendVBold = memo(
  forwardRef<SVGSVGElement, SendVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-bold" {...props}>
      <path fillRule="evenodd" d="M5.66 21.23a2.14 2.14 0 0 1-2.93-2.83l7.36-14.72a2.14 2.14 0 0 1 3.82 0l7.36 14.72a2.14 2.14 0 0 1-2.93 2.83L12 17.77zM4.5 19.38q0 .03.04.08l.08.04.08-.02 6.3-3.44V11.1a1 1 0 0 1 2 0v4.95l6.3 3.44.08.02.08-.04.04-.08-.01-.08-7.37-14.73-.05-.06L12 4.5l-.07.02-.05.06L4.5 19.3q-.03.06-.01.08" clipRule="evenodd" />
    </IconBase>
  ))
);

SendVBold.displayName = 'SendVBold';

// Triple export pattern (lucide-react style)
export { SendVBold, SendVBold as SendVBoldIcon, SendVBold as SiSendVBold };
export default SendVBold;
export type { SendVBoldProps };
