import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-duotone" {...props}>
      <path d="M4.94 6q-.2.24-.34.52c-.15.3-.25.7-.3 1.31q-.04.59-.05 1.42H8.2l1.5 1.5H4.25v3.85c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.3-.15.53-.34l1.07 1.07q-.43.35-.91.6c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.96q-.01-1.34.06-2.25.06-1.05.46-1.87.25-.49.6-.9zM16.79 3.3q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07.9.06 2.25v4.640000000000001l-.01 1.66a.75.75 0 0 1-1.5-.03l.01-1.63v-3.85h-5.5a.75.75 0 0 1 0-1.5h5.5q-.01-.83-.05-1.42c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43a3 3 0 0 0-1.23-.29v-1.5zM15.25 3.25v1.5H9.9l-1.64.01a.75.75 0 0 1-.03-1.5l1.67-.01h5.35" opacity={0.4} />
        <path fill="currentColor" d="M2.47 2.47c.3-.3.77-.3 1.06 0l18 18a.75.75 0 0 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06M16 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarOffRegularDuotone.displayName = 'CalendarOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarOffRegularDuotone, CalendarOffRegularDuotone as CalendarOffRegularDuotoneIcon, CalendarOffRegularDuotone as SiCalendarOffRegularDuotone };
export default CalendarOffRegularDuotone;
export type { CalendarOffRegularDuotoneProps };
