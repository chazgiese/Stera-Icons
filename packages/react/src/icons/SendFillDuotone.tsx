import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendFillDuotone = memo(
  forwardRef<SVGSVGElement, SendFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.18 2.11a2.14 2.14 0 0 1 2.7 2.71l-5.23 15.71c-.66 2-3.5 1.94-4.09-.07l-1.73-5.88 5.88-5.87a1 1 0 0 0-1.42-1.42l-5.87 5.88-5.88-1.73a2.14 2.14 0 0 1-.07-4.1z" opacity={.4} />
        <path fill="currentColor" d="M15.3 7.3a1 1 0 1 1 1.4 1.4l-5.87 5.88-.32-1.1-1.1-.31z" />
    </IconBase>
  ))
);

SendFillDuotone.displayName = 'SendFillDuotone';

// Triple export pattern (lucide-react style)
export { SendFillDuotone, SendFillDuotone as SendFillDuotoneIcon, SendFillDuotone as SiSendFillDuotone };
export type { SendFillDuotoneProps };
