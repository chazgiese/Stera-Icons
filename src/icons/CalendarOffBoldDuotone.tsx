import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-bold-duotone" {...props}>
      <path d="M5.3 6.7c-.12.26-.2.6-.25 1.15V8h1.54l2 2H5v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05a3 3 0 0 0 1.14-.24l1.46 1.46q-.22.15-.48.29c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6V8.88q.01-.66.06-1.19a5 5 0 0 1 .77-2.45zM15.5 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96A19 19 0 0 1 21 9.11L21 10.4v3.2q0 1.27-.03 2.18a1 1 0 0 1-2-.09q.04-.8.03-2.09V10h-5.77a1 1 0 1 1 0-2h5.73l-.01-.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24V6a1 1 0 1 1-2 0V5h-4.1000000000000005c-.87 0-1.54 0-2.1.02a1 1 0 0 1-.08-2Q9.12 3 10.4 3h4.1000000000000005V2a1 1 0 0 1 1-1M5.88 4.46l.02.02-.04-.03z" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CalendarOffBoldDuotone.displayName = 'CalendarOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarOffBoldDuotone, CalendarOffBoldDuotone as CalendarOffBoldDuotoneIcon, CalendarOffBoldDuotone as SiCalendarOffBoldDuotone };
export default CalendarOffBoldDuotone;
export type { CalendarOffBoldDuotoneProps };
