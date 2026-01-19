import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHFillDuotone = memo(
  forwardRef<SVGSVGElement, SendHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h-fill-duotone" {...props}>
      <path fill="currentColor" d="M2.03 4.98a2.25 2.25 0 0 1 2.98-3.1l16.2 8.1a2.25 2.25 0 0 1 0 4.03l-16.2 8.1a2.25 2.25 0 0 1-2.98-3.09L5.32 13H14a1 1 0 0 0 0-2H5.32z" opacity={.4} />
        <path fill="currentColor" d="M14 11a1 1 0 1 1 0 2H5.32l.54-1-.54-1z" />
    </IconBase>
  ))
);

SendHFillDuotone.displayName = 'SendHFillDuotone';

// Triple export pattern (lucide-react style)
export { SendHFillDuotone, SendHFillDuotone as SendHFillDuotoneIcon, SendHFillDuotone as SiSendHFillDuotone };
export default SendHFillDuotone;
export type { SendHFillDuotoneProps };
