import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalHighBoldProps = Omit<IconBaseProps, 'children'>;

const SignalHighBold = memo(
  forwardRef<SVGSVGElement, SignalHighBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-high-bold" {...props}>
      <path fill="currentColor" d="M3.5 17.13c.76 0 1.38.61 1.38 1.37v1c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-1c0-.76.61-1.37 1.37-1.37zM9.5 12.46c.76 0 1.38.61 1.38 1.37v5.67c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-5.67c0-.76.61-1.37 1.37-1.37zM15.5 7.79c.76 0 1.38.61 1.38 1.37V19.5c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38V9.16c0-.76.61-1.37 1.37-1.37zM21.5 3.13c.76 0 1.38.61 1.38 1.37v15c0 .76-.62 1.38-1.38 1.38h-1c-.76 0-1.37-.62-1.37-1.38v-15c0-.76.61-1.37 1.37-1.37z" />
    </IconBase>
  ))
);

SignalHighBold.displayName = 'SignalHighBold';

// Triple export pattern (lucide-react style)
export { SignalHighBold, SignalHighBold as SignalHighBoldIcon, SignalHighBold as SiSignalHighBold };
export type { SignalHighBoldProps };
