import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockFillProps = Omit<IconBaseProps, 'children'>;

const ClockFill = memo(
  forwardRef<SVGSVGElement, ClockFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .3.7l2.82 2.84a1 1 0 1 0 1.42-1.42L13 11.6V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockFill.displayName = 'ClockFill';

// Triple export pattern (lucide-react style)
export { ClockFill, ClockFill as ClockFillIcon, ClockFill as SiClockFill };
export default ClockFill;
export type { ClockFillProps };
