import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockBoldProps = Omit<IconBaseProps, 'children'>;

const ClockBold = memo(
  forwardRef<SVGSVGElement, ClockBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-bold" {...props}>
      <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4.59l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockBold.displayName = 'ClockBold';

// Triple export pattern (lucide-react style)
export { ClockBold, ClockBold as ClockBoldIcon, ClockBold as SiClockBold };
export default ClockBold;
export type { ClockBoldProps };
