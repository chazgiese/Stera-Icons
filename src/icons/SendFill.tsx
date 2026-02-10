import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendFillProps = Omit<IconBaseProps, 'children'>;

const SendFill = memo(
  forwardRef<SVGSVGElement, SendFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-fill" {...props}>
      <path fill="currentColor" d="M19.18 2.11a2.14 2.14 0 0 1 2.7 2.71l-5.23 15.71c-.66 2-3.5 1.95-4.09-.07l-1.73-5.88 5.88-5.87a1 1 0 0 0-1.42-1.42l-5.87 5.88-5.88-1.73a2.14 2.14 0 0 1-.07-4.09z" />
    </IconBase>
  ))
);

SendFill.displayName = 'SendFill';

// Triple export pattern (lucide-react style)
export { SendFill, SendFill as SendFillIcon, SendFill as SiSendFill };
export default SendFill;
export type { SendFillProps };
