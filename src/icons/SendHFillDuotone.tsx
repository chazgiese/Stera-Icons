import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHFillDuotone = memo(
  forwardRef<SVGSVGElement, SendHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-fill-duotone" {...props}>
      <path fill="currentColor" d="M2.86 5.66c-1-1.84.96-3.87 2.83-2.93l14.72 7.36a2.14 2.14 0 0 1 0 3.82L5.7 21.27a2.14 2.14 0 0 1-2.83-2.93L5.77 13H13a1 1 0 0 0 0-2H5.77z" opacity={.4} />
        <path fill="currentColor" d="M13 11a1 1 0 1 1 0 2H5.77l.55-1-.55-1z" />
    </IconBase>
  ))
);

SendHFillDuotone.displayName = 'SendHFillDuotone';

// Triple export pattern (lucide-react style)
export { SendHFillDuotone, SendHFillDuotone as SendHFillDuotoneIcon, SendHFillDuotone as SiSendHFillDuotone };
export default SendHFillDuotone;
export type { SendHFillDuotoneProps };
