import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarClockFillProps = Omit<IconBaseProps, 'children'>;

const CalendarClockFill = memo(
  forwardRef<SVGSVGElement, CalendarClockFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-clock-fill" {...props}>
      <path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v1.08a5 5 0 0 1 1.77.46 5 5 0 0 1 2.18 2.18v.01l.1.19q.33.8.4 1.77.05.94.05 2.31v.91a7.5 7.5 0 0 0-8.74-.91H4.5v4.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.4.05 2.52.05q.6 1.14 1.53 2H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.73q0-1.2.06-2.04a5 5 0 0 1 .48-1.96 5 5 0 0 1 2.4-2.28q.7-.3 1.56-.37V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M16.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2a1 1 0 0 0-1 1v2.5c0 .36.2.69.5.87l1.5.86a1 1 0 0 0 1-1.73l-1-.58V14a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarClockFill.displayName = 'CalendarClockFill';

// Triple export pattern (lucide-react style)
export { CalendarClockFill, CalendarClockFill as CalendarClockFillIcon, CalendarClockFill as SiCalendarClockFill };
export type { CalendarClockFillProps };
