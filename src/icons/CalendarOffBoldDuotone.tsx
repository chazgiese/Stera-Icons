import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-bold-duotone" {...props}>
      <path d="m4.97 6.39-.14.25a3 3 0 0 0-.28 1.21q-.04.48-.04 1.15h3.08l2 2H4.5v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28l.25-.14 1.44 1.43a5 5 0 0 1-.78.5c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.96q-.02-1.34.06-2.27c.06-.73.18-1.37.48-1.96a5 5 0 0 1 .5-.78zM17 3.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.07.92.06 2.27v4.640000000000001l-.01 1.67a1 1 0 0 1-2-.04l.01-1.63V11h-5.26a1 1 0 1 1 0-2h5.25q0-.66-.04-1.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24zM15 3v2H9.9l-1.63.01a1 1 0 1 1-.05-2L9.9 3H15" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4M16 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarOffBoldDuotone.displayName = 'CalendarOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarOffBoldDuotone, CalendarOffBoldDuotone as CalendarOffBoldDuotoneIcon, CalendarOffBoldDuotone as SiCalendarOffBoldDuotone };
export default CalendarOffBoldDuotone;
export type { CalendarOffBoldDuotoneProps };
