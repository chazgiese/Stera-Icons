import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendVFillProps = Omit<IconBaseProps, 'children'>;

const SendVFill = memo(
  forwardRef<SVGSVGElement, SendVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-v-fill" {...props}>
      <path fill="currentColor" d="M9.99 2.79a2.25 2.25 0 0 1 4.02 0l8.1 16.2a2.25 2.25 0 0 1-3.09 2.98L13 18.69V10a1 1 0 0 0-2 0v8.68l-6.02 3.29a2.25 2.25 0 0 1-3.1-2.98z" />
    </IconBase>
  ))
);

SendVFill.displayName = 'SendVFill';

// Triple export pattern (lucide-react style)
export { SendVFill, SendVFill as SendVFillIcon, SendVFill as SiSendVFill };
export default SendVFill;
export type { SendVFillProps };
