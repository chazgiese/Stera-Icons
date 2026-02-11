import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltLowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltLowBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltLowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-low-bold-duotone" {...props}>
      <path d="M12.5 9.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1A1.9 1.9 0 0 1 9.63 19v-8c0-1.04.83-1.87 1.87-1.87zM20 3.13c1.04 0 1.88.83 1.88 1.87v14c0 1.04-.84 1.88-1.88 1.88h-1A1.9 1.9 0 0 1 17.13 19V5c0-1.04.83-1.87 1.87-1.87z" opacity={0.4} />
        <path d="M5 15.13c1.04 0 1.88.83 1.88 1.87v2c0 1.04-.84 1.88-1.88 1.88H4A1.9 1.9 0 0 1 2.13 19v-2c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalAltLowBoldDuotone.displayName = 'SignalAltLowBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignalAltLowBoldDuotone, SignalAltLowBoldDuotone as SignalAltLowBoldDuotoneIcon, SignalAltLowBoldDuotone as SiSignalAltLowBoldDuotone };
export default SignalAltLowBoldDuotone;
export type { SignalAltLowBoldDuotoneProps };
