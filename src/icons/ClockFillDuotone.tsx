import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockFillDuotone = memo(
  forwardRef<SVGSVGElement, ClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .3.7l2.82 2.84a1 1 0 1 0 1.42-1.42L13 11.6V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4.59l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ClockFillDuotone.displayName = 'ClockFillDuotone';

// Triple export pattern (lucide-react style)
export { ClockFillDuotone, ClockFillDuotone as ClockFillDuotoneIcon, ClockFillDuotone as SiClockFillDuotone };
export default ClockFillDuotone;
export type { ClockFillDuotoneProps };
