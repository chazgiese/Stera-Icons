import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarBlankRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBlankRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-blank-duotone" {...props}>
      <path fillRule="evenodd" d="M16.79 3.3q1.05.07 1.87.47a4.8 4.8 0 0 1 2.25 2.48l.04.14.03.07q0 .03.02.06l.04.17.01.06.04.16.02.11q0 .06.02.11l.02.16.01.11.01.1.01.08v.04l.01.1.02.22.01.23a19 19 0 0 1 .03 1.4v5.03q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.56l.03-1.39.01-.23.02-.23v-.13l.02-.08v-.1l.02-.11.02-.16.02-.1.06-.28.01-.06.04-.17.02-.06.02-.07.05-.14q.07-.2.18-.4a4.8 4.8 0 0 1 2.07-2.08c.55-.28 1.16-.4 1.87-.46h.04v1.5a3 3 0 0 0-1.23.3 3.3 3.3 0 0 0-1.5 1.6q-.15.38-.21 1.08l-.01.13a12 12 0 0 0-.04 1.33h15.48l-.04-1.33v-.13a4 4 0 0 0-.3-1.27c-.32-.6-.81-1.1-1.42-1.42a3 3 0 0 0-1.23-.29v-1.5zM4.25 14.6c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.85H4.25z" clipRule="evenodd" opacity={0.4} />
        <path d="M15.25 3.25v1.5h-6.5v-1.5h6.5" opacity={0.4} />
        <path fill="currentColor" d="M8 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M16 1.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CalendarBlankRegularDuotone.displayName = 'CalendarBlankRegularDuotone';

// Triple export pattern (lucide-react style)
export { CalendarBlankRegularDuotone, CalendarBlankRegularDuotone as CalendarBlankRegularDuotoneIcon, CalendarBlankRegularDuotone as SiCalendarBlankRegularDuotone };
export default CalendarBlankRegularDuotone;
export type { CalendarBlankRegularDuotoneProps };
