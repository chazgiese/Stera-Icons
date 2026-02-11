import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-clock-fill-duotone" {...props}>
      <path d="M15.5 1a1 1 0 0 1 1 1v1.03l.48.07a5 5 0 0 1 3.92 3.92c.1.51.1 1.1.1 1.98a1 1 0 0 1-1 1H5v4.5c0 1.47.01 1.98.13 2.37a3 3 0 0 0 2 2c.39.12.9.13 2.37.13a1 1 0 1 1 0 2c-1.32 0-2.2.01-2.95-.21a5 5 0 0 1-3.34-3.34C3 16.71 3 15.82 3 14.5V8.88q.01-.66.06-1.19c.06-.73.18-1.37.49-1.96a5 5 0 0 1 2.18-2.19q.8-.39 1.77-.46V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M16.5 11.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2.38c-.48 0-.87.39-.87.87v1.75q.01.47.38.73l1.5 1a.88.88 0 0 0 .98-1.46l-1.11-.74v-1.28c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarClockFillDuotone.displayName = 'CalendarClockFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarClockFillDuotone, CalendarClockFillDuotone as CalendarClockFillDuotoneIcon, CalendarClockFillDuotone as SiCalendarClockFillDuotone };
export default CalendarClockFillDuotone;
export type { CalendarClockFillDuotoneProps };
