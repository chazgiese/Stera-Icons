import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalZeroBoldProps = Omit<IconBaseProps, 'children'>;

const SignalZeroBold = memo(
  forwardRef<SVGSVGElement, SignalZeroBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-zero-bold" {...props}>
      <path fill="currentColor" d="M3.5 17.13c.76 0 1.38.61 1.38 1.37v1c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-1c0-.76.61-1.37 1.37-1.37z" />
    </IconBase>
  ))
);

SignalZeroBold.displayName = 'SignalZeroBold';

// Triple export pattern (lucide-react style)
export { SignalZeroBold, SignalZeroBold as SignalZeroBoldIcon, SignalZeroBold as SiSignalZeroBold };
export type { SignalZeroBoldProps };
