import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalAltMediumRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltMediumRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltMediumRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-medium-duotone" {...props}>
      <path fill="currentColor" d="M20 3.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V5c0-.83.67-1.5 1.5-1.5z" opacity={.4} />
        <path fill="currentColor" d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 10 19v-8c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltMediumRegularDuotone.displayName = 'SignalAltMediumRegularDuotone';

// Triple export pattern (lucide-react style)
export { SignalAltMediumRegularDuotone, SignalAltMediumRegularDuotone as SignalAltMediumRegularDuotoneIcon, SignalAltMediumRegularDuotone as SiSignalAltMediumRegularDuotone };
export default SignalAltMediumRegularDuotone;
export type { SignalAltMediumRegularDuotoneProps };
