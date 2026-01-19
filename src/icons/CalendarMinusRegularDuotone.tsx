import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarMinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarMinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarMinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-minus-duotone" {...props}>
      <path fillRule="evenodd" d="M16.79 3.3q1.05.07 1.87.47 1.19.61 1.89 1.75l.18.32.1.2.08.21.04.13.03.08.03.12.03.1.02.12.03.1.07.51.01.1.01.07v.04l.01.1.02.22.01.23a19 19 0 0 1 .03 1.4v5.03q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.56l.03-1.39.01-.23.02-.23v-.13l.02-.08v-.09l.08-.5.03-.1.02-.12.03-.1.03-.13.03-.08.04-.13q.07-.2.18-.4a4.8 4.8 0 0 1 2.07-2.08c.55-.28 1.16-.4 1.87-.46h.04v1.5a3 3 0 0 0-1.23.3c-.6.3-1.1.8-1.42 1.41q-.15.3-.24.8v.04a6 6 0 0 0-.09.93v.17l-.01.79h15.48v-.8l-.02-.16-.08-.93v-.04a3 3 0 0 0-.24-.8c-.32-.6-.81-1.1-1.42-1.42a3 3 0 0 0-1.23-.29v-1.5zM4.25 14.6c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.85H4.25z" clipRule="evenodd" opacity={0.4} />
        <path d="M15.25 3.25v1.5h-6.5v-1.5h6.5" opacity={0.4} />
        <path fill="currentColor" d="M15 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM8 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M16 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarMinusRegularDuotone.displayName = 'CalendarMinusRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarMinusRegularDuotone, CalendarMinusRegularDuotone as CalendarMinusRegularDuotoneIcon, CalendarMinusRegularDuotone as SiCalendarMinusRegularDuotone };
export type { CalendarMinusRegularDuotoneProps };
