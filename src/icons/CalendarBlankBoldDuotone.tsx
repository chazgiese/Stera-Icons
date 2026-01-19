import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarBlankBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBlankBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-blank-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M17 3.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-4.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46v2c-.4.06-.66.14-.86.25a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22q-.04.48-.04 1.15h14.98q0-.66-.04-1.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24zM4.5 14.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V11h-15z" clipRule="evenodd" opacity={0.4} />
        <path d="M15 3v2H9V3h6" opacity={0.4} />
        <path fill="currentColor" d="M8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarBlankBoldDuotone.displayName = 'CalendarBlankBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalendarBlankBoldDuotone, CalendarBlankBoldDuotone as CalendarBlankBoldDuotoneIcon, CalendarBlankBoldDuotone as SiCalendarBlankBoldDuotone };
export default CalendarBlankBoldDuotone;
export type { CalendarBlankBoldDuotoneProps };
