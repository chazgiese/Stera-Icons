import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarFoldFillProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFill = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.08a5 5 0 0 1 1.77.46 5 5 0 0 1 2.27 2.38q.34.8.4 1.77.06.85.06 2.04v5.4q0 .46-.09.89a3 3 0 0 1-.37.88c-.2.33-.5.6-.82.91l-3.1 3q-.43.46-.89.77a3 3 0 0 1-.85.34c-.37.09-.74.08-1.18.08H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.73q0-1.2.06-2.04a5 5 0 0 1 .48-1.96 5 5 0 0 1 2.4-2.28q.7-.3 1.56-.37V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M4.5 10.4v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H13v-2.3q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03h2.3V10h-15zm12.7 5.1c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.25l.2-.1c.08-.04.16-.1.53-.47l3.1-3c.4-.38.47-.46.52-.54a1 1 0 0 0 .12-.3l.01-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldFill.displayName = 'CalendarFoldFill';

// Triple export pattern (lucide-react style)
export { CalendarFoldFill, CalendarFoldFill as CalendarFoldFillIcon, CalendarFoldFill as SiCalendarFoldFill };
export type { CalendarFoldFillProps };
