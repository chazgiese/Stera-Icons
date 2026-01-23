import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffFillProps = Omit<IconBaseProps, 'children'>;

const CalendarOffFill = memo(
  forwardRef<SVGSVGElement, CalendarOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-.75-.74q-.37.28-.78.5c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.18-2.19c-.3-.6-.43-1.23-.5-1.96q-.06-1.06-.05-2.71V9.73q0-1.2.06-2.04a5 5 0 0 1 .49-1.96 5 5 0 0 1 .49-.78L2.29 3.71a1 1 0 0 1 0-1.42M4.5 10v4.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28l.25-.14L8.6 10z" clipRule="evenodd" />
        <path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v1.08a5 5 0 0 1 1.77.46 5 5 0 0 1 2.18 2.18v.01l.1.19q.33.8.4 1.77.05.94.05 2.31v4.6q.01 1.65-.06 2.7l-.02.2-1.92-1.92V10H13.9L7 3.08l.2-.02Q8.25 2.99 9.9 3H15V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarOffFill.displayName = 'CalendarOffFill';

// Triple export pattern (lucide-react style)
export { CalendarOffFill, CalendarOffFill as CalendarOffFillIcon, CalendarOffFill as SiCalendarOffFill };
export default CalendarOffFill;
export type { CalendarOffFillProps };
