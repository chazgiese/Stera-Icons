import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalLowFillProps = Omit<IconBaseProps, 'children'>;

const SignalLowFill = memo(
  forwardRef<SVGSVGElement, SignalLowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-low-fill" {...props}>
      <path d="M3.5 16.75c.97 0 1.75.78 1.75 1.75v1c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-1c0-.97.78-1.75 1.75-1.75zM9.5 12.08c.97 0 1.75.78 1.75 1.75v5.67c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-5.67c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalLowFill.displayName = 'SignalLowFill';

// Triple export pattern (lucide-react style)
export { SignalLowFill, SignalLowFill as SignalLowFillIcon, SignalLowFill as SiSignalLowFill };
export default SignalLowFill;
export type { SignalLowFillProps };
