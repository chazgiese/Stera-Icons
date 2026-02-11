import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-slash-duotone" {...props}>
      <path fillRule="evenodd" d="M15.5 1.25c.41 0 .75.34.75.75v1.27a4.6 4.6 0 0 1 4.4 3.8c.1.48.1 1.04.1 1.93 0 .41-.34.75-.75.75H4.75v4.75c0 1.45 0 2 .14 2.44a3.3 3.3 0 0 0 2.17 2.17c.43.13.99.14 2.44.14a.75.75 0 0 1 0 1.5c-1.34 0-2.18 0-2.88-.2a4.8 4.8 0 0 1-3.17-3.17c-.2-.7-.2-1.54-.2-2.88V8.9q.01-.66.06-1.19.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46h.04V2a.75.75 0 0 1 1.5 0v1.25h5.5V2c0-.41.34-.75.75-.75m-6.25 3.5V6a.75.75 0 0 1-1.5 0V4.81a3 3 0 0 0-1.23.3c-.6.3-1.1.8-1.42 1.41-.15.3-.25.7-.3 1.31l-.02.42h14.47a3.25 3.25 0 0 0-3-3.48V6a.75.75 0 1 1-1.5 0V4.75h-5.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12.79 12.79a5.25 5.25 0 1 1 7.42 7.42 5.25 5.25 0 0 1-7.42-7.42m.58 1.64a3.75 3.75 0 0 0 5.2 5.2zm5.78-.58a3.75 3.75 0 0 0-4.72-.48l5.2 5.2c.96-1.46.8-3.44-.48-4.72" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarSlashRegularDuotone.displayName = 'CalendarSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarSlashRegularDuotone, CalendarSlashRegularDuotone as CalendarSlashRegularDuotoneIcon, CalendarSlashRegularDuotone as SiCalendarSlashRegularDuotone };
export default CalendarSlashRegularDuotone;
export type { CalendarSlashRegularDuotoneProps };
