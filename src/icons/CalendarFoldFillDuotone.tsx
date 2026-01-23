import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-fold-fill-duotone" {...props}>
      <path fill="currentColor" d="M21.5 10.4v4.1h-3.8q-.82 0-1.35.03-.55.04-.98.24a2.5 2.5 0 0 0-1.1 1.1q-.21.44-.24.98-.04.52-.03 1.35V22H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V10h19z" opacity={.4} />
        <path fill="currentColor" d="M21.5 15a2.5 2.5 0 0 1-.37 1.47c-.16.27-.38.5-.71.82l-3.63 3.63c-.33.33-.55.55-.81.71a2.5 2.5 0 0 1-1.48.37H14v-3.8q0-.82.03-1.35.04-.55.24-.98a2.5 2.5 0 0 1 1.1-1.1q.44-.21.98-.24.52-.04 1.35-.03h3.8zM16 1a1 1 0 0 1 1 1v1.09c.73.07 1.28.2 1.77.45a5 5 0 0 1 2.19 2.19c.47.93.53 2.12.54 4.27h-19c0-2.15.07-3.34.54-4.27a5 5 0 0 1 2.19-2.19A5 5 0 0 1 7 3.1V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarFoldFillDuotone.displayName = 'CalendarFoldFillDuotone';

// Triple export pattern (lucide-react style)
export { CalendarFoldFillDuotone, CalendarFoldFillDuotone as CalendarFoldFillDuotoneIcon, CalendarFoldFillDuotone as SiCalendarFoldFillDuotone };
export default CalendarFoldFillDuotone;
export type { CalendarFoldFillDuotoneProps };
