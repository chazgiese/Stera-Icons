import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldBold = memo(
  forwardRef<SVGSVGElement, CalendarFoldBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fold-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.27q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-3.13 3.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-4.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M4.5 14.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H13v-2.3q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03h2.3V11h-15zm12.7.9c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.24l.2-.09c.07-.04.15-.12.53-.5l3.13-3.12c.37-.38.45-.46.5-.54l.08-.19zM9 5v1a1 1 0 1 1-2 0v-.91c-.4.05-.66.13-.86.24a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22q-.04.48-.04 1.15h14.98q0-.66-.04-1.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24V6a1 1 0 1 1-2 0V5H9" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldBold.displayName = 'CalendarFoldBold';

// Triple export pattern (lucide-react style)
export { CalendarFoldBold, CalendarFoldBold as CalendarFoldBoldIcon, CalendarFoldBold as SiCalendarFoldBold };
export default CalendarFoldBold;
export type { CalendarFoldBoldProps };
