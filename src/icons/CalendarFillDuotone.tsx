import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M2.5 10h19V9v5.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9zm5 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-4.5-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={0.4} />
        <path d="M8 1a1 1 0 0 1 1 1v1Q7.81 3 7 3.1V2a1 1 0 0 1 1-1M16 1a1 1 0 0 1 1 1v1.09Q16.19 3 15 3V2a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M7.5 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.5 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.5 3c2.8 0 4.2 0 5.27.54a5 5 0 0 1 2.19 2.19c.47.93.53 2.12.54 4.27h-19c0-2.15.07-3.34.54-4.27a5 5 0 0 1 2.19-2.19C6.3 3 7.7 3 10.5 3z" />
    </IconBase>
  ))
);

CalendarFillDuotone.displayName = 'CalendarFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFillDuotone, CalendarFillDuotone as CalendarFillDuotoneIcon, CalendarFillDuotone as SiCalendarFillDuotone };
export type { CalendarFillDuotoneProps };
