import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarBold = memo(
  forwardRef<SVGSVGElement, CalendarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-bold" {...props}>
      <path fill="currentColor" d="M7.5 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.5 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.06a5 5 0 0 1 1.71.46l.06.02a5 5 0 0 1 .86.56l.08.07a5 5 0 0 1 .62.62l.07.08a5 5 0 0 1 .56.86l.02.06.14.3q.3.74.34 1.65.05.89.04 2.26v4.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V10q-.01-1.37.04-2.26a5 5 0 0 1 .48-1.95l.02-.06.16-.29.02-.03a5 5 0 0 1 .38-.54l.07-.08a5 5 0 0 1 .62-.62l.08-.07a5 5 0 0 1 .76-.5l.02-.01.08-.05.06-.02.3-.14q.65-.26 1.41-.32V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M4.5 14.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V11h-15zM9 5v1a1 1 0 1 1-2 0v-.91q-.47.06-.73.18l-.16.07a3 3 0 0 0-1.27 1.27l-.07.16c-.1.25-.18.57-.22 1.08q-.04.48-.04 1.15h14.98q0-.66-.04-1.15a4 4 0 0 0-.22-1.08l-.07-.16a3 3 0 0 0-1.27-1.27l-.16-.07a3 3 0 0 0-.73-.18V6a1 1 0 1 1-2 0V5H9" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBold.displayName = 'CalendarBold';

// Triple export pattern (lucide-react style)
export { CalendarBold, CalendarBold as CalendarBoldIcon, CalendarBold as SiCalendarBold };
export type { CalendarBoldProps };
