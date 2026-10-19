import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockBoldDuotone = memo(
  forwardRef<SVGSVGElement, ClockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v4.59l2.54 2.53c.39.4.39 1.02 0 1.42-.4.39-1.03.39-1.42 0L11.3 12.7q-.12-.13-.19-.28-.06-.1-.08-.23L11 12V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ClockBoldDuotone.displayName = 'ClockBoldDuotone';

// Triple export pattern
export { ClockBoldDuotone, ClockBoldDuotone as ClockBoldDuotoneIcon, ClockBoldDuotone as SiClockBoldDuotone };
export default ClockBoldDuotone;
export type { ClockBoldDuotoneProps };
