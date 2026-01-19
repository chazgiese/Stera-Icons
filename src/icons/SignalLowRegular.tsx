import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalLowRegularProps = Omit<IconBaseProps, 'children'>;

const SignalLowRegular = memo(
  forwardRef<SVGSVGElement, SignalLowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-low" {...props}>
      <path fill="currentColor" d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM9.5 12.83a1 1 0 0 1 1 1v5.67a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.67a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalLowRegular.displayName = 'SignalLowRegular';

// Triple export pattern (lucide-react style)
export { SignalLowRegular, SignalLowRegular as SignalLowRegularIcon, SignalLowRegular as SiSignalLowRegular };
export default SignalLowRegular;
export type { SignalLowRegularProps };
