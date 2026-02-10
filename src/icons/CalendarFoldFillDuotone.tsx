import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fold-fill-duotone" {...props}>
      <path d="M19 10v3h-1.8q-.81 0-1.4.03c-.4.03-.78.1-1.16.3a3 3 0 0 0-1.31 1.3c-.2.39-.27.78-.3 1.17q-.04.59-.03 1.4V19h-2.6c-1.14 0-1.93 0-2.55-.05a3 3 0 0 1-1.21-.28 3 3 0 0 1-1.31-1.3 3 3 0 0 1-.28-1.22C5 15.53 5 14.74 5 13.6V10z" opacity={0.4} />
        <path d="m18.58 15-.22.23-3.13 3.13-.23.22V17.2c0-.58 0-.95.02-1.23.03-.27.06-.37.09-.42a1 1 0 0 1 .44-.44c.05-.03.15-.06.42-.09.28-.02.65-.02 1.23-.02z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.27q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-3.13 3.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H10.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1M5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H13v-1.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19v-3H5zM17.2 15c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.38l.23-.22 3.13-3.13.22-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldFillDuotone.displayName = 'CalendarFoldFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldFillDuotone, CalendarFoldFillDuotone as CalendarFoldFillDuotoneIcon, CalendarFoldFillDuotone as SiCalendarFoldFillDuotone };
export default CalendarFoldFillDuotone;
export type { CalendarFoldFillDuotoneProps };
