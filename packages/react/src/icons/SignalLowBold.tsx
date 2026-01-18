import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalLowBoldProps = Omit<IconBaseProps, 'children'>;

const SignalLowBold = memo(
  forwardRef<SVGSVGElement, SignalLowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3.5 17.13c.76 0 1.38.61 1.38 1.37v1c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-1c0-.76.61-1.37 1.37-1.37zM9.5 12.46c.76 0 1.38.61 1.38 1.37v5.67c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-5.67c0-.76.61-1.37 1.37-1.37z" />
    </IconBase>
  ))
);

SignalLowBold.displayName = 'SignalLowBold';

// Triple export pattern (lucide-react style)
export { SignalLowBold, SignalLowBold as SignalLowBoldIcon, SignalLowBold as SiSignalLowBold };
export type { SignalLowBoldProps };
