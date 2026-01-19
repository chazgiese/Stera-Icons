import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalZeroRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalZeroRegularDuotone = memo(
  forwardRef<SVGSVGElement, SignalZeroRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-zero-duotone" {...props}>
      <path d="M9.5 12.83a1 1 0 0 1 1 1v5.67a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.67a1 1 0 0 1 1-1zM15.5 8.16a1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.16a1 1 0 0 1 1-1zM21.5 3.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z" opacity={0.4} />
        <path fill="currentColor" d="M3.5 17.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

SignalZeroRegularDuotone.displayName = 'SignalZeroRegularDuotone';

// Triple export pattern (lucide-react style)
export { SignalZeroRegularDuotone, SignalZeroRegularDuotone as SignalZeroRegularDuotoneIcon, SignalZeroRegularDuotone as SiSignalZeroRegularDuotone };
export type { SignalZeroRegularDuotoneProps };
