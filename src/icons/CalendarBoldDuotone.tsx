import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M16.5 3.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46v2c-.4.06-.66.14-.86.25a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22V8h13.9v-.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24zM5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V10H5z" clipRule="evenodd" opacity={0.4} />
        <path d="M14.5 3v2h-5V3h5" opacity={0.4} />
        <path fill="currentColor" d="M7.75 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8.5 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M15.5 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarBoldDuotone.displayName = 'CalendarBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarBoldDuotone, CalendarBoldDuotone as CalendarBoldDuotoneIcon, CalendarBoldDuotone as SiCalendarBoldDuotone };
export default CalendarBoldDuotone;
export type { CalendarBoldDuotoneProps };
