import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalZeroFillProps = Omit<IconBaseProps, 'children'>;

const SignalZeroFill = memo(
  forwardRef<SVGSVGElement, SignalZeroFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-zero-fill" {...props}>
      <path d="M3.5 16.75c.97 0 1.75.78 1.75 1.75v1c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-1c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

SignalZeroFill.displayName = 'SignalZeroFill';

// Triple export pattern (lucide-react style)
export { SignalZeroFill, SignalZeroFill as SignalZeroFillIcon, SignalZeroFill as SiSignalZeroFill };
export default SignalZeroFill;
export type { SignalZeroFillProps };
