import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalAltMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-alt-medium-bold-duotone" {...props}>
      <path fill="currentColor" d="M20 3.13c1.04 0 1.88.83 1.88 1.87v14c0 1.04-.84 1.88-1.88 1.88h-1A1.9 1.9 0 0 1 17.13 19V5c0-1.04.83-1.87 1.87-1.87z" opacity={.4} />
        <path fill="currentColor" d="M5 15.13c1.04 0 1.88.83 1.88 1.87v2c0 1.04-.84 1.88-1.88 1.88H4A1.9 1.9 0 0 1 2.13 19v-2c0-1.04.83-1.87 1.87-1.87zM12.5 9.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1A1.9 1.9 0 0 1 9.63 19v-8c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

SignalAltMediumBoldDuotone.displayName = 'SignalAltMediumBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignalAltMediumBoldDuotone, SignalAltMediumBoldDuotone as SignalAltMediumBoldDuotoneIcon, SignalAltMediumBoldDuotone as SiSignalAltMediumBoldDuotone };
export type { SignalAltMediumBoldDuotoneProps };
