import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarXRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarXRegular = memo(
  forwardRef<SVGSVGElement, CalendarXRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-x" {...props}>
      <path fill="currentColor" d="M13.47 12.97a.75.75 0 1 1 1.06 1.06l-1.47 1.47 1.47 1.47a.75.75 0 1 1-1.06 1.06L12 16.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 1 1 1.06-1.06L12 14.44z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.25c.41 0 .75.34.75.75v1.3a5 5 0 0 1 1.86.45l.05.02.02.01q.15.07.3.17l.02.01.26.17.05.04.25.2.06.05q.23.21.45.44l.06.08.2.25.04.05.16.25.02.04.17.29.01.02.02.04.14.3c.2.48.28.98.32 1.58q.05.87.04 2.24v4.6q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V10q-.01-1.37.04-2.24a5 5 0 0 1 .46-1.88l.02-.04.01-.02q.07-.15.17-.3l.02-.03.16-.25.04-.05.16-.2.06-.08.04-.05q.21-.23.45-.44l.03-.03.07-.06.2-.16.06-.04.26-.17.03-.01.29-.17.02-.01.04-.02.3-.14c.47-.2.98-.28 1.57-.32V2a.75.75 0 0 1 1.5 0v1.25h6.5V2c0-.41.34-.75.75-.75M4.25 14.6c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.85H4.25zm4.5-9.85V6a.75.75 0 0 1-1.5 0V4.81a3 3 0 0 0-1.46.43q-.76.47-1.19 1.28c-.15.3-.25.7-.3 1.31q-.04.59-.05 1.42h15.5q0-.83-.05-1.42c-.05-.62-.15-1-.3-1.3a3.3 3.3 0 0 0-1.43-1.43 3 3 0 0 0-1.22-.29V6a.75.75 0 0 1-1.5 0V4.75h-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarXRegular.displayName = 'CalendarXRegular';

// Triple export pattern (lucide-react style)
export { CalendarXRegular, CalendarXRegular as CalendarXRegularIcon, CalendarXRegular as SiCalendarXRegular };
export default CalendarXRegular;
export type { CalendarXRegularProps };
