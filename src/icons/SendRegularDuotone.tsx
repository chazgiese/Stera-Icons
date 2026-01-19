import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-duotone" {...props}>
      <path fill="currentColor" d="M15.47 7.47a.75.75 0 1 1 1.06 1.06l-4.37 4.37-.12-.43a.8.8 0 0 0-.51-.5l-.43-.13z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.26 2.35a1.9 1.9 0 0 1 2.4 2.4l-5.25 15.7a1.9 1.9 0 0 1-3.6-.06l-2.1-7.1-7.1-2.1a1.9 1.9 0 0 1-.06-3.6zm.97 1.92a.4.4 0 0 0-.5-.5L4.02 9.01a.4.4 0 0 0 .01.75l7.5 2.2q.38.13.5.51l2.21 7.5c.11.37.63.38.75.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendRegularDuotone.displayName = 'SendRegularDuotone';

// Triple export pattern (lucide-react style)
export { SendRegularDuotone, SendRegularDuotone as SendRegularDuotoneIcon, SendRegularDuotone as SiSendRegularDuotone };
export type { SendRegularDuotoneProps };
