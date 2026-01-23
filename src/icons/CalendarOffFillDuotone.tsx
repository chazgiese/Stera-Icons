import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-fill-duotone" {...props}>
      <path d="M19.55 20.96q-.37.28-.78.5c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V10H8.6zM21.5 10.4v4.2q.02 1.65-.06 2.7l-.02.2-7.5-7.5h7.58z" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4L8.58 10H2.5c0-2.15.07-3.34.55-4.27a5 5 0 0 1 .49-.78L2.29 3.71a1 1 0 0 1 0-1.42M16 1a1 1 0 0 1 1 1v1.09c.73.07 1.28.2 1.77.45a5 5 0 0 1 2.19 2.19c.47.93.53 2.12.54 4.27H13.9l-6.9-6.91A39 39 0 0 1 10.5 3H15V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarOffFillDuotone.displayName = 'CalendarOffFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarOffFillDuotone, CalendarOffFillDuotone as CalendarOffFillDuotoneIcon, CalendarOffFillDuotone as SiCalendarOffFillDuotone };
export default CalendarOffFillDuotone;
export type { CalendarOffFillDuotoneProps };
