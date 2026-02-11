import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHFillProps = Omit<IconBaseProps, 'children'>;

const SendHFill = memo(
  forwardRef<SVGSVGElement, SendHFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-fill" {...props}>
      <path d="M2.86 5.66c-1-1.84.96-3.87 2.83-2.93l14.72 7.36a2.14 2.14 0 0 1 0 3.82L5.7 21.27a2.14 2.14 0 0 1-2.83-2.93L5.76 13H13a1 1 0 0 0 0-2H5.77z" />
    </IconBase>
  ))
);

SendHFill.displayName = 'SendHFill';

// Triple export pattern (lucide-react style)
export { SendHFill, SendHFill as SendHFillIcon, SendHFill as SiSendHFill };
export default SendHFill;
export type { SendHFillProps };
