import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalendarBlankRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankRegular = memo(
  forwardRef<SVGSVGElement, CalendarBlankRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-blank" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1.25c.41 0 .75.34.75.75v1.3h.04q1.05.07 1.87.47c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-4.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46h.04V2a.75.75 0 0 1 1.5 0v1.25h6.5V2c0-.41.34-.75.75-.75M4.25 14.6c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.85H4.25zm4.5-9.85V6a.75.75 0 0 1-1.5 0V4.81a3 3 0 0 0-1.23.3c-.6.3-1.1.8-1.42 1.41-.15.3-.25.7-.3 1.31q-.04.59-.05 1.42h15.5q0-.83-.05-1.42c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43a3 3 0 0 0-1.23-.29V6a.75.75 0 0 1-1.5 0V4.75h-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBlankRegular.displayName = 'CalendarBlankRegular';

// Triple export pattern (lucide-react style)
export { CalendarBlankRegular, CalendarBlankRegular as CalendarBlankRegularIcon, CalendarBlankRegular as SiCalendarBlankRegular };
export default CalendarBlankRegular;
export type { CalendarBlankRegularProps };
