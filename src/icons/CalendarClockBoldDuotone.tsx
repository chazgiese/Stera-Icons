import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarClockBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarClockBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarClockBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-clock-bold-duotone" {...props}>
      <path d="M7 5.09c-.4.05-.66.13-.86.24a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22q-.04.48-.04 1.15h6.2a1 1 0 1 1 0 2H4.5v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.13.6.23 1.19.28s1.35.05 2.44.05a1 1 0 0 1 0 2 33 33 0 0 1-2.61-.06 5 5 0 0 1-1.92-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.96q-.02-1.34.06-2.27c.06-.73.18-1.37.48-1.96a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46zM17 3.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.48.96.53 2.11.54 3.64a1 1 0 0 1-2 .02c-.01-1.63-.09-2.28-.33-2.75a3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24zM15 3v2H9V3h6.000000000000001" opacity={0.4} />
        <path fill="currentColor" d="M16 13a1 1 0 0 1 1 1v1.42l1 .58a1 1 0 0 1-1 1.73l-1.5-.86A1 1 0 0 1 15 16v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M16 10a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" />
        <path fill="currentColor" d="M8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarClockBoldDuotone.displayName = 'CalendarClockBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarClockBoldDuotone, CalendarClockBoldDuotone as CalendarClockBoldDuotoneIcon, CalendarClockBoldDuotone as SiCalendarClockBoldDuotone };
export default CalendarClockBoldDuotone;
export type { CalendarClockBoldDuotoneProps };
