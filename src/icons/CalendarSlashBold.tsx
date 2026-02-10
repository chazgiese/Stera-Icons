import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarSlashBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarSlashBold = memo(
  forwardRef<SVGSVGElement, CalendarSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-slash-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.61 12.61a5.5 5.5 0 1 1 7.78 7.78 5.5 5.5 0 0 1-7.78-7.78m.81 2.23a3.5 3.5 0 0 0 4.74 4.74zm5.56-.81a3.5 3.5 0 0 0-4.14-.6l4.74 4.73a3.5 3.5 0 0 0-.6-4.13" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 1a1 1 0 0 1 1 1v1.03l.48.07a5 5 0 0 1 3.92 3.92c.1.51.1 1.1.1 1.98a1 1 0 0 1-1 1H5v4.5c0 1.47.01 1.98.13 2.37a3 3 0 0 0 2 2c.39.12.9.13 2.37.13a1 1 0 1 1 0 2c-1.32 0-2.2.01-2.95-.21a5 5 0 0 1-3.34-3.34C3 16.71 3 15.82 3 14.5V8.88q.01-.66.06-1.19c.06-.73.18-1.37.49-1.96a5 5 0 0 1 2.18-2.19q.8-.39 1.77-.46V2a1 1 0 0 1 2 0v1h5V2a1 1 0 0 1 1-1m-6 4v1a1 1 0 1 1-2 0v-.91c-.4.05-.66.13-.86.24a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22V8h13.94a3 3 0 0 0-2.4-2.94l-.09-.02V6a1 1 0 1 1-2 0V5h-5" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarSlashBold.displayName = 'CalendarSlashBold';

// Triple export pattern (lucide-react style)
export { CalendarSlashBold, CalendarSlashBold as CalendarSlashBoldIcon, CalendarSlashBold as SiCalendarSlashBold };
export default CalendarSlashBold;
export type { CalendarSlashBoldProps };
