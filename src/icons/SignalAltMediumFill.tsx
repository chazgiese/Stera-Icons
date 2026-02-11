import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalAltMediumFillProps = Omit<IconBaseProps, 'children'>;

const SignalAltMediumFill = memo(
  forwardRef<SVGSVGElement, SignalAltMediumFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-medium-fill" {...props}>
      <path d="M5 14.75c1.24 0 2.25 1 2.25 2.25v2c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-2c0-1.24 1-2.25 2.25-2.25zM12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalAltMediumFill.displayName = 'SignalAltMediumFill';

// Triple export pattern (lucide-react style)
export { SignalAltMediumFill, SignalAltMediumFill as SignalAltMediumFillIcon, SignalAltMediumFill as SiSignalAltMediumFill };
export default SignalAltMediumFill;
export type { SignalAltMediumFillProps };
