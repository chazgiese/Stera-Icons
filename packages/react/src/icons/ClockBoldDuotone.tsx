import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockBoldDuotone = memo(
  forwardRef<SVGSVGElement, ClockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5.59l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ClockBoldDuotone.displayName = 'ClockBoldDuotone';

// Triple export pattern (lucide-react style)
export { ClockBoldDuotone, ClockBoldDuotone as ClockBoldDuotoneIcon, ClockBoldDuotone as SiClockBoldDuotone };
export type { ClockBoldDuotoneProps };
