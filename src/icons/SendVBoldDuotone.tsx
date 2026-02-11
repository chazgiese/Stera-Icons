import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVBoldDuotone = memo(
  forwardRef<SVGSVGElement, SendVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M5.66 21.23a2.14 2.14 0 0 1-2.93-2.83l7.36-14.72a2.14 2.14 0 0 1 3.82 0l7.36 14.72a2.14 2.14 0 0 1-2.93 2.83L12 17.78zM4.5 19.38q0 .03.04.08l.08.04.08-.02 6.82-3.72a1 1 0 0 1 .96 0l6.82 3.72.08.02.08-.04.04-.08q.01-.02-.01-.08L12.12 4.57l-.05-.06L12 4.5l-.07.02-.05.06L4.52 19.3q-.03.06-.02.08" clipRule="evenodd" />
        <path d="M11 11.1a1 1 0 1 1 2 0v4.94l-.52-.28a1 1 0 0 0-.96 0l-.52.28z" opacity={.4} />
    </IconBase>
  ))
);

SendVBoldDuotone.displayName = 'SendVBoldDuotone';

// Triple export pattern (lucide-react style)
export { SendVBoldDuotone, SendVBoldDuotone as SendVBoldDuotoneIcon, SendVBoldDuotone as SiSendVBoldDuotone };
export default SendVBoldDuotone;
export type { SendVBoldDuotoneProps };
