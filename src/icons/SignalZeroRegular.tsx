import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalZeroRegularProps = Omit<IconBaseProps, 'children'>;

const SignalZeroRegular = memo(
  forwardRef<SVGSVGElement, SignalZeroRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-zero" {...props}>
      <path fill="currentColor" d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalZeroRegular.displayName = 'SignalZeroRegular';

// Triple export pattern (lucide-react style)
export { SignalZeroRegular, SignalZeroRegular as SignalZeroRegularIcon, SignalZeroRegular as SiSignalZeroRegular };
export default SignalZeroRegular;
export type { SignalZeroRegularProps };
