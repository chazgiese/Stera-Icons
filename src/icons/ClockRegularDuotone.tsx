import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, ClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v4.69l2.6 2.6a.75.75 0 1 1-1.05 1.07l-2.83-2.83-.13-.19q-.02-.02-.03-.05a1 1 0 0 1-.06-.29V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ClockRegularDuotone.displayName = 'ClockRegularDuotone';

// Triple export pattern (lucide-react style)
export { ClockRegularDuotone, ClockRegularDuotone as ClockRegularDuotoneIcon, ClockRegularDuotone as SiClockRegularDuotone };
export default ClockRegularDuotone;
export type { ClockRegularDuotoneProps };
