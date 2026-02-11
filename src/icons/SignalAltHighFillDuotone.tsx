import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltHighFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltHighFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltHighFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-high-fill-duotone" {...props}>
      <path d="M5 14.75c1.24 0 2.25 1 2.25 2.25v2c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-2c0-1.24 1-2.25 2.25-2.25zM12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25zM20 2.75c1.24 0 2.25 1 2.25 2.25v14c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25V5c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalAltHighFillDuotone.displayName = 'SignalAltHighFillDuotone';

// Triple export pattern (lucide-react style)
export { SignalAltHighFillDuotone, SignalAltHighFillDuotone as SignalAltHighFillDuotoneIcon, SignalAltHighFillDuotone as SiSignalAltHighFillDuotone };
export default SignalAltHighFillDuotone;
export type { SignalAltHighFillDuotoneProps };
