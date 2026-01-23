import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalMediumRegularProps = Omit<IconBaseProps, 'children'>;

const SignalMediumRegular = memo(
  forwardRef<SVGSVGElement, SignalMediumRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-medium" {...props}>
      <path fill="currentColor" d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM9.5 12.83a1 1 0 0 1 1 1v5.67a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.67a1 1 0 0 1 1-1zM15.5 8.16a1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.16a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalMediumRegular.displayName = 'SignalMediumRegular';

// Triple export pattern (lucide-react style)
export { SignalMediumRegular, SignalMediumRegular as SignalMediumRegularIcon, SignalMediumRegular as SiSignalMediumRegular };
export default SignalMediumRegular;
export type { SignalMediumRegularProps };
