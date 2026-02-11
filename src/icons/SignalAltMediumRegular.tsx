import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltMediumRegularProps = Omit<IconBaseProps, 'children'>;

const SignalAltMediumRegular = memo(
  forwardRef<SVGSVGElement, SignalAltMediumRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-medium" {...props}>
      <path d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2c0-.83.67-1.5 1.5-1.5zM12.5 9.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 10 19v-8c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltMediumRegular.displayName = 'SignalAltMediumRegular';

// Triple export pattern (lucide-react style)
export { SignalAltMediumRegular, SignalAltMediumRegular as SignalAltMediumRegularIcon, SignalAltMediumRegular as SiSignalAltMediumRegular };
export default SignalAltMediumRegular;
export type { SignalAltMediumRegularProps };
