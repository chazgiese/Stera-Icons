import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalAltLowRegularProps = Omit<IconBaseProps, 'children'>;

const SignalAltLowRegular = memo(
  forwardRef<SVGSVGElement, SignalAltLowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 15.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

SignalAltLowRegular.displayName = 'SignalAltLowRegular';

// Triple export pattern (lucide-react style)
export { SignalAltLowRegular, SignalAltLowRegular as SignalAltLowRegularIcon, SignalAltLowRegular as SiSignalAltLowRegular };
export type { SignalAltLowRegularProps };
