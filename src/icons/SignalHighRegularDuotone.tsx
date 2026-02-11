import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-high-duotone" {...props}>
      <path d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM9.5 12.83a1 1 0 0 1 1 1v5.67a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.67a1 1 0 0 1 1-1zM15.5 8.16a1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.16a1 1 0 0 1 1-1zM21.5 3.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalHighRegularDuotone.displayName = 'SignalHighRegularDuotone';

// Triple export pattern (lucide-react style)
export { SignalHighRegularDuotone, SignalHighRegularDuotone as SignalHighRegularDuotoneIcon, SignalHighRegularDuotone as SiSignalHighRegularDuotone };
export default SignalHighRegularDuotone;
export type { SignalHighRegularDuotoneProps };
