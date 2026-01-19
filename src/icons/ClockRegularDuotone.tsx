import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, ClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v5.69l2.6 2.6a.75.75 0 1 1-1.05 1.07l-2.83-2.83-.13-.19q-.02-.02-.03-.05a1 1 0 0 1-.06-.29V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ClockRegularDuotone.displayName = 'ClockRegularDuotone';

// Triple export pattern (lucide-react style)
export { ClockRegularDuotone, ClockRegularDuotone as ClockRegularDuotoneIcon, ClockRegularDuotone as SiClockRegularDuotone };
export type { ClockRegularDuotoneProps };
