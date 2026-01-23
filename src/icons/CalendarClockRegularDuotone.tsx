import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-clock-duotone" {...props}>
      <path d="M7.25 4.81a3 3 0 0 0-1.23.3c-.6.3-1.1.8-1.42 1.41-.15.3-.25.7-.3 1.31q-.04.59-.05 1.42h6.47a.75.75 0 0 1 0 1.5H4.25v3.85c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.68.24 1.27.3.61.05 1.39.05 2.47.05a.75.75 0 1 1 0 1.5c-1.06 0-1.9 0-2.6-.06a5 5 0 0 1-1.82-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.96q-.02-1.34.06-2.25.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46h.04zM16.79 3.3q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.46.9.5 1.99.52 3.54a.75.75 0 0 1-1.5 0c-.01-1.61-.08-2.33-.35-2.86-.32-.6-.81-1.1-1.42-1.42a3 3 0 0 0-1.23-.29v-1.5zM15.25 3.25v1.5h-6.5v-1.5h6.5" opacity={0.4} />
        <path fill="currentColor" d="M16 13.25c.41 0 .75.34.75.75v1.57l1.13.65a.75.75 0 0 1-.75 1.3l-1.5-.87a.8.8 0 0 1-.38-.65v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M16 10.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5m0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5" clipRule="evenodd" />
        <path fill="currentColor" d="M8 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M16 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarClockRegularDuotone.displayName = 'CalendarClockRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarClockRegularDuotone, CalendarClockRegularDuotone as CalendarClockRegularDuotoneIcon, CalendarClockRegularDuotone as SiCalendarClockRegularDuotone };
export default CalendarClockRegularDuotone;
export type { CalendarClockRegularDuotoneProps };
