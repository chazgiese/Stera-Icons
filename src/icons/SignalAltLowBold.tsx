import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltLowBoldProps = Omit<IconBaseProps, 'children'>;

const SignalAltLowBold = memo(
  forwardRef<SVGSVGElement, SignalAltLowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-low-bold" {...props}>
      <path fill="currentColor" d="M5 15.13c1.04 0 1.88.83 1.88 1.87v2c0 1.04-.84 1.88-1.88 1.88H4A1.9 1.9 0 0 1 2.13 19v-2c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalAltLowBold.displayName = 'SignalAltLowBold';

// Triple export pattern (lucide-react style)
export { SignalAltLowBold, SignalAltLowBold as SignalAltLowBoldIcon, SignalAltLowBold as SiSignalAltLowBold };
export default SignalAltLowBold;
export type { SignalAltLowBoldProps };
