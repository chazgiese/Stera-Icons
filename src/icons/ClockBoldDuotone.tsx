import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockBoldDuotone = memo(
  forwardRef<SVGSVGElement, ClockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4.59l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ClockBoldDuotone.displayName = 'ClockBoldDuotone';

// Triple export pattern (lucide-react style)
export { ClockBoldDuotone, ClockBoldDuotone as ClockBoldDuotoneIcon, ClockBoldDuotone as SiClockBoldDuotone };
export default ClockBoldDuotone;
export type { ClockBoldDuotoneProps };
