import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVFillProps = Omit<IconBaseProps, 'children'>;

const SendVFill = memo(
  forwardRef<SVGSVGElement, SendVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-fill" {...props}>
      <path d="M5.66 21.23a2.14 2.14 0 0 1-2.93-2.83l7.36-14.72a2.14 2.14 0 0 1 3.82 0l7.36 14.72a2.14 2.14 0 0 1-2.93 2.83L13 18.33v-7.24a1 1 0 0 0-2 0v7.23z" />
    </IconBase>
  ))
);

SendVFill.displayName = 'SendVFill';

// Triple export pattern (lucide-react style)
export { SendVFill, SendVFill as SendVFillIcon, SendVFill as SiSendVFill };
export default SendVFill;
export type { SendVFillProps };
