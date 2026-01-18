import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockFillDuotone = memo(
  forwardRef<SVGSVGElement, ClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6a1 1 0 0 0 .3.7l2.82 2.84a1 1 0 1 0 1.42-1.42L13 11.6V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5.59l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ClockFillDuotone.displayName = 'ClockFillDuotone';

// Triple export pattern (lucide-react style)
export { ClockFillDuotone, ClockFillDuotone as ClockFillDuotoneIcon, ClockFillDuotone as SiClockFillDuotone };
export type { ClockFillDuotoneProps };
