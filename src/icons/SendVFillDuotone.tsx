import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVFillDuotone = memo(
  forwardRef<SVGSVGElement, SendVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-fill-duotone" {...props}>
      <path fill="currentColor" d="M9.99 2.79a2.25 2.25 0 0 1 4.02 0l8.1 16.2a2.25 2.25 0 0 1-3.09 2.98L13 18.69V10a1 1 0 0 0-2 0v8.68l-6.02 3.29a2.25 2.25 0 0 1-3.1-2.98z" opacity={.4} />
        <path fill="currentColor" d="M12 9a1 1 0 0 1 1 1v8.69l-1-.55-1 .55V10a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SendVFillDuotone.displayName = 'SendVFillDuotone';

// Triple export pattern (lucide-react style)
export { SendVFillDuotone, SendVFillDuotone as SendVFillDuotoneIcon, SendVFillDuotone as SiSendVFillDuotone };
export default SendVFillDuotone;
export type { SendVFillDuotoneProps };
