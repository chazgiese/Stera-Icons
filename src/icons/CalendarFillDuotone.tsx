import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21 10.4v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6V9h18zM7.75 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.25-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 11.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.75 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15.5 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.45.89.52 1.93.53 3.26V9H3.01v-.01c.01-1.33.08-2.37.53-3.26a5 5 0 0 1 2.19-2.19 5 5 0 0 1 1.77-.46V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarFillDuotone.displayName = 'CalendarFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFillDuotone, CalendarFillDuotone as CalendarFillDuotoneIcon, CalendarFillDuotone as SiCalendarFillDuotone };
export default CalendarFillDuotone;
export type { CalendarFillDuotoneProps };
