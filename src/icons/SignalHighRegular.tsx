import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalHighRegularProps = Omit<IconBaseProps, 'children'>;

const SignalHighRegular = memo(
  forwardRef<SVGSVGElement, SignalHighRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-high" {...props}>
      <path fill="currentColor" d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM9.5 12.83a1 1 0 0 1 1 1v5.67a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.67a1 1 0 0 1 1-1zM15.5 8.16a1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.16a1 1 0 0 1 1-1zM21.5 3.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalHighRegular.displayName = 'SignalHighRegular';

// Triple export pattern (lucide-react style)
export { SignalHighRegular, SignalHighRegular as SignalHighRegularIcon, SignalHighRegular as SiSignalHighRegular };
export default SignalHighRegular;
export type { SignalHighRegularProps };
