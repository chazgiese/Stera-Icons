import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldFillProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFill = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fold-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.27q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-3.13 3.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H10.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1M5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H13v-1.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19v-3H5zM17.2 15c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.38l.23-.22 3.13-3.13.22-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldFill.displayName = 'CalendarFoldFill';

// Triple export pattern (lucide-react style)
export { CalendarFoldFill, CalendarFoldFill as CalendarFoldFillIcon, CalendarFoldFill as SiCalendarFoldFill };
export default CalendarFoldFill;
export type { CalendarFoldFillProps };
