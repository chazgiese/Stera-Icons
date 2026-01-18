import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalAltLowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalAltLowFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalAltLowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 8.75c1.24 0 2.25 1 2.25 2.25v8c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25v-8c0-1.24 1-2.25 2.25-2.25zM20 2.75c1.24 0 2.25 1 2.25 2.25v14c0 1.24-1 2.25-2.25 2.25h-1c-1.24 0-2.25-1-2.25-2.25V5c0-1.24 1-2.25 2.25-2.25z" opacity={0.4} />
        <path fill="currentColor" d="M5 14.75c1.24 0 2.25 1 2.25 2.25v2c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-2c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalAltLowFillDuotone.displayName = 'SignalAltLowFillDuotone';

// Triple export pattern (lucide-react style)
export { SignalAltLowFillDuotone, SignalAltLowFillDuotone as SignalAltLowFillDuotoneIcon, SignalAltLowFillDuotone as SiSignalAltLowFillDuotone };
export type { SignalAltLowFillDuotoneProps };
