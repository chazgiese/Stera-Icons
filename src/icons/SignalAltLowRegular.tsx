import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltLowRegularProps = Omit<IconBaseProps, 'children'>;

const SignalAltLowRegular = memo(
  forwardRef<SVGSVGElement, SignalAltLowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-low" {...props}>
      <path d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltLowRegular.displayName = 'SignalAltLowRegular';

// Triple export pattern (lucide-react style)
export { SignalAltLowRegular, SignalAltLowRegular as SignalAltLowRegularIcon, SignalAltLowRegular as SiSignalAltLowRegular };
export default SignalAltLowRegular;
export type { SignalAltLowRegularProps };
