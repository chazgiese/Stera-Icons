import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVFillDuotone = memo(
  forwardRef<SVGSVGElement, SendVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-fill-duotone" {...props}>
      <path d="M5.66 21.23a2.14 2.14 0 0 1-2.93-2.83l7.36-14.72a2.14 2.14 0 0 1 3.82 0l7.36 14.72a2.14 2.14 0 0 1-2.93 2.83L13 18.33v-7.24a1 1 0 0 0-2 0v7.23z" opacity={.4} />
        <path d="M11 11.1a1 1 0 1 1 2 0v7.22l-1-.54-1 .54z" />
    </IconBase>
  ))
);

SendVFillDuotone.displayName = 'SendVFillDuotone';

// Triple export pattern (lucide-react style)
export { SendVFillDuotone, SendVFillDuotone as SendVFillDuotoneIcon, SendVFillDuotone as SiSendVFillDuotone };
export default SendVFillDuotone;
export type { SendVFillDuotoneProps };
