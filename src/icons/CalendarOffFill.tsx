import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffFillProps = Omit<IconBaseProps, 'children'>;

const CalendarOffFill = memo(
  forwardRef<SVGSVGElement, CalendarOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-1.54-1.53-.5.29c-.58.3-1.22.42-1.95.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.98 15.25 3 13.6V8.93l.01-.15.01-.43v-.18l.03-.39V7.7l.01-.03.01-.11q.04-.37.1-.72l.01-.03.03-.14.1-.34q0-.06.03-.1l.03-.1a4 4 0 0 1 .46-.88L2.29 3.71a1 1 0 0 1 0-1.42M5 10v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05a3 3 0 0 0 1.14-.24L8.6 10z" clipRule="evenodd" />
        <path fill="currentColor" d="M15.5 1a1 1 0 0 1 1 1v1.08h.08q.92.09 1.69.46a5 5 0 0 1 2.36 2.59l.03.09.03.1q.07.22.12.45l.02.06a7 7 0 0 1 .1.83l.01.03v.1l.05.99v.21L21 10.4v3.2q.02 1.65-.06 2.7-.02.34-.08.65L19 15.08 19 13.6V10H13.9L7.05 3.13l.64-.07Q8.75 2.99 10.4 3h4.1V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarOffFill.displayName = 'CalendarOffFill';

// Triple export pattern (lucide-react style)
export { CalendarOffFill, CalendarOffFill as CalendarOffFillIcon, CalendarOffFill as SiCalendarOffFill };
export default CalendarOffFill;
export type { CalendarOffFillProps };
