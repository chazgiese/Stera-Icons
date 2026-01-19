import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarBlankFillProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankFill = memo(
  forwardRef<SVGSVGElement, CalendarBlankFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-blank-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.08a5 5 0 0 1 1.77.46 5 5 0 0 1 2.27 2.38q.34.8.4 1.77.06.85.06 2.04v4.87q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.73q0-1.2.06-2.04a5 5 0 0 1 .48-1.96 5 5 0 0 1 2.4-2.28q.7-.3 1.56-.37V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M4.5 10v4.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V10z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBlankFill.displayName = 'CalendarBlankFill';

// Triple export pattern (lucide-react style)
export { CalendarBlankFill, CalendarBlankFill as CalendarBlankFillIcon, CalendarBlankFill as SiCalendarBlankFill };
export type { CalendarBlankFillProps };
