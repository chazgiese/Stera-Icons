import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalAltHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 10 19v-8c0-.83.67-1.5 1.5-1.5zM20 3.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltHighRegularDuotone.displayName = 'SignalAltHighRegularDuotone';

// Triple export pattern (lucide-react style)
export { SignalAltHighRegularDuotone, SignalAltHighRegularDuotone as SignalAltHighRegularDuotoneIcon, SignalAltHighRegularDuotone as SiSignalAltHighRegularDuotone };
export type { SignalAltHighRegularDuotoneProps };
