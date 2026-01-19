import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarFoldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fold-duotone" {...props}>
      <path fillRule="evenodd" d="M16.79 3.3q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.27c0 .46 0 .8-.08 1.14q-.09.42-.33.8c-.18.3-.43.54-.75.86l-3.12 3.12c-.32.32-.57.57-.86.75q-.38.24-.8.33c-.33.08-.68.08-1.14.08H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-4.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46h.04v1.5a3 3 0 0 0-1.23.3c-.6.3-1.1.8-1.42 1.41-.15.3-.25.7-.3 1.31q-.04.59-.05 1.42h15.5q0-.83-.05-1.42c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43a3 3 0 0 0-1.23-.29v-1.5zM4.25 14.6c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.35V17.7q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h2.55v-3H4.25zm12.95.65q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.54a1 1 0 0 0 .57-.17c.11-.07.22-.17.59-.54l3.12-3.12c.37-.37.47-.48.54-.59q.1-.16.15-.36l.02-.21z" clipRule="evenodd" opacity={0.4} />
        <path d="M15.25 3.25v1.5h-6.5v-1.5h6.5" opacity={0.4} />
        <path fill="currentColor" d="M8 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M16 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarFoldRegularDuotone.displayName = 'CalendarFoldRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldRegularDuotone, CalendarFoldRegularDuotone as CalendarFoldRegularDuotoneIcon, CalendarFoldRegularDuotone as SiCalendarFoldRegularDuotone };
export default CalendarFoldRegularDuotone;
export type { CalendarFoldRegularDuotoneProps };
