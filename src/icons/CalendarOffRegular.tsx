import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarOffRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarOffRegular = memo(
  forwardRef<SVGSVGElement, CalendarOffRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off" {...props}>
      <path fillRule="evenodd" d="M2.47 2.47c.3-.3.77-.3 1.06 0l2.15 2.15.02.02.02.02 15.81 15.81a.75.75 0 0 1-1.06 1.06l-1.68-1.68q-.3.21-.63.38c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69V8.9q.01-.66.06-1.19a5 5 0 0 1 .84-2.5L2.47 3.53a.75.75 0 0 1 0-1.06m2.28 7.28v3.85c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05a3.4 3.4 0 0 0 1.53-.43L8.7 9.75zm.48-3.46-.13.23c-.15.3-.25.7-.3 1.31l-.02.42h2.4z" clipRule="evenodd" />
        <path d="M15.5 1.25c.41 0 .75.34.75.75v1.3h.04q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87a19 19 0 0 1 .05 1.38l.01 1.31v3.2q0 1.27-.03 2.17a.75.75 0 0 1-1.5-.07c.03-.56.03-1.23.03-2.1V9.75h-6.02a.75.75 0 0 1 0-1.5h6l-.03-.42c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43a3 3 0 0 0-1.23-.29V6a.75.75 0 0 1-1.5 0V4.75H10.4q-1.29 0-2.1.02a.75.75 0 0 1-.07-1.5q.89-.03 2.17-.02h4.35V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarOffRegular.displayName = 'CalendarOffRegular';

// Triple export pattern (lucide-react style)
export { CalendarOffRegular, CalendarOffRegular as CalendarOffRegularIcon, CalendarOffRegular as SiCalendarOffRegular };
export default CalendarOffRegular;
export type { CalendarOffRegularProps };
