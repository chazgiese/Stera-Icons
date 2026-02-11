import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalMediumFillProps = Omit<IconBaseProps, 'children'>;

const SignalMediumFill = memo(
  forwardRef<SVGSVGElement, SignalMediumFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-medium-fill" {...props}>
      <path d="M3.5 16.75c.97 0 1.75.78 1.75 1.75v1c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-1c0-.97.78-1.75 1.75-1.75zM9.5 12.08c.97 0 1.75.78 1.75 1.75v5.67c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-5.67c0-.97.78-1.75 1.75-1.75zM15.5 7.41c.97 0 1.75.79 1.75 1.75V19.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V9.16c0-.96.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalMediumFill.displayName = 'SignalMediumFill';

// Triple export pattern (lucide-react style)
export { SignalMediumFill, SignalMediumFill as SignalMediumFillIcon, SignalMediumFill as SiSignalMediumFill };
export default SignalMediumFill;
export type { SignalMediumFillProps };
