import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalLowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalLowRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalLowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-low-duotone" {...props}>
      <path d="M15.5 8.16a1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.16a1 1 0 0 1 1-1zM21.5 3.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z" opacity={0.4} />
        <path fill="currentColor" d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM9.5 12.83a1 1 0 0 1 1 1v5.67a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.67a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalLowRegularDuotone.displayName = 'SignalLowRegularDuotone';

// Triple export pattern (lucide-react style)
export { SignalLowRegularDuotone, SignalLowRegularDuotone as SignalLowRegularDuotoneIcon, SignalLowRegularDuotone as SiSignalLowRegularDuotone };
export type { SignalLowRegularDuotoneProps };
