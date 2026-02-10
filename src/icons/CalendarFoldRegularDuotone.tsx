import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.75 10.4v3.27c0 .46 0 .8-.08 1.14q-.09.42-.33.8c-.18.3-.43.54-.75.86l-3.12 3.12c-.32.32-.57.57-.86.75q-.38.24-.8.33c-.33.08-.68.08-1.14.08H10.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.75h1.5v3.85c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h2.85V17.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h2.05v-3.5h1.5zm-3.55 4.35q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.9l.07-.03c.11-.07.22-.17.59-.54l3.12-3.12c.37-.37.47-.48.54-.59l.03-.07z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 1.25c.41 0 .75.34.75.75v1.3h.04q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.43.83.5 1.81.51 3.15l.01.76H3.25v-.76c.02-1.34.1-2.32.52-3.15a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46h.04V2a.75.75 0 0 1 1.5 0v1.25h5.5V2c0-.41.34-.75.75-.75m-6.25 3.5V6a.75.75 0 0 1-1.5 0V4.81a3 3 0 0 0-1.23.3c-.6.3-1.1.8-1.42 1.41-.19.38-.28.87-.32 1.73h14.44a4 4 0 0 0-.32-1.73 3.3 3.3 0 0 0-1.42-1.42 3 3 0 0 0-1.23-.29V6a.75.75 0 0 1-1.5 0V4.75h-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarFoldRegularDuotone.displayName = 'CalendarFoldRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldRegularDuotone, CalendarFoldRegularDuotone as CalendarFoldRegularDuotoneIcon, CalendarFoldRegularDuotone as SiCalendarFoldRegularDuotone };
export default CalendarFoldRegularDuotone;
export type { CalendarFoldRegularDuotoneProps };
