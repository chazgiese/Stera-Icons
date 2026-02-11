import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignalMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignalMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="signal-medium-bold-duotone" {...props}>
      <path d="M3.5 17c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 1 19.5v-1c0-.83.67-1.5 1.5-1.5zM9.5 12.33c.83 0 1.5.67 1.5 1.5v5.67c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 7 19.5v-5.67c0-.83.67-1.5 1.5-1.5zM15.5 7.66c.83 0 1.5.68 1.5 1.5V19.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V9.16c0-.82.67-1.5 1.5-1.5z" />
        <path d="M21.5 3c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-15c0-.83.67-1.5 1.5-1.5z" opacity={.4} />
    </IconBase>
  ))
);

SignalMediumBoldDuotone.displayName = 'SignalMediumBoldDuotone';

// Triple export pattern (lucide-react style)
export { SignalMediumBoldDuotone, SignalMediumBoldDuotone as SignalMediumBoldDuotoneIcon, SignalMediumBoldDuotone as SiSignalMediumBoldDuotone };
export default SignalMediumBoldDuotone;
export type { SignalMediumBoldDuotoneProps };
