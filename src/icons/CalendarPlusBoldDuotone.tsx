import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-plus-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M7 5.09a3 3 0 0 0-.96.3l-.39.25-.08.06a3 3 0 0 0-.37.37l-.06.08a3 3 0 0 0-.37.62c-.1.25-.18.58-.22 1.08q-.04.48-.04 1.15h14.98q0-.66-.04-1.15c-.04-.5-.12-.83-.22-1.08a3 3 0 0 0-.37-.62l-.06-.08a3 3 0 0 0-.37-.37l-.08-.06a3 3 0 0 0-.62-.37 3 3 0 0 0-.73-.18V3.06q.76.06 1.41.32l.13.06h.02l.15.08.06.02.08.05h.02a5 5 0 0 1 .6.39l.03.02.21.17.08.06a5 5 0 0 1 .47.48l.07.08.16.2.03.03.26.39.02.04.16.28.02.06.14.3q.3.74.34 1.65.05.89.04 2.26v4.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V10q-.01-1.37.04-2.26a5 5 0 0 1 .48-1.95l.02-.06a5 5 0 0 1 .44-.7l.03-.04.16-.2.06-.08a5 5 0 0 1 .48-.48l.08-.06L4.5 4l.03-.02a5 5 0 0 1 .6-.38l.02-.01.08-.05.06-.02.15-.07.02-.01.13-.06q.65-.26 1.41-.32zM4.5 14.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V11h-15z" clipRule="evenodd" opacity={0.4} />
        <path d="M15 3v2H9V3h6" opacity={0.4} />
        <path fill="currentColor" d="M12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1M8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarPlusBoldDuotone.displayName = 'CalendarPlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarPlusBoldDuotone, CalendarPlusBoldDuotone as CalendarPlusBoldDuotoneIcon, CalendarPlusBoldDuotone as SiCalendarPlusBoldDuotone };
export default CalendarPlusBoldDuotone;
export type { CalendarPlusBoldDuotoneProps };
