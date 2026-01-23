import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltHighRegularProps = Omit<IconBaseProps, 'children'>;

const SignalAltHighRegular = memo(
  forwardRef<SVGSVGElement, SignalAltHighRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-high" {...props}>
      <path fill="currentColor" d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 10 19v-8c0-.83.67-1.5 1.5-1.5zM20 3.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltHighRegular.displayName = 'SignalAltHighRegular';

// Triple export pattern (lucide-react style)
export { SignalAltHighRegular, SignalAltHighRegular as SignalAltHighRegularIcon, SignalAltHighRegular as SiSignalAltHighRegular };
export default SignalAltHighRegular;
export type { SignalAltHighRegularProps };
