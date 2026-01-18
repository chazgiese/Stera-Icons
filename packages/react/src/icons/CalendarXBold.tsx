import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarXBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarXBold = memo(
  forwardRef<SVGSVGElement, CalendarXBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.3 12.8a1 1 0 1 1 1.4 1.4l-1.29 1.3 1.3 1.3a1 1 0 1 1-1.42 1.4L12 16.92l-1.3 1.3a1 1 0 1 1-1.4-1.42l1.29-1.29-1.3-1.3a1 1 0 1 1 1.42-1.4L12 14.08z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.06a5 5 0 0 1 1.71.46l.06.02.08.05h.02a5 5 0 0 1 .76.51l.08.07a5 5 0 0 1 .62.62l.07.08a5 5 0 0 1 .56.86l.02.06.14.3q.3.74.34 1.65.05.89.04 2.26v4.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V10q-.01-1.37.04-2.26a5 5 0 0 1 .48-1.95l.02-.06.16-.29.02-.03a5 5 0 0 1 .38-.54l.07-.08a5 5 0 0 1 .62-.62l.08-.07a5 5 0 0 1 .76-.5l.02-.01.08-.05.06-.02.3-.14q.65-.26 1.41-.32V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M4.5 14.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V11h-15zM9 5v1a1 1 0 1 1-2 0v-.91q-.47.06-.73.18a3 3 0 0 0-1.5 1.5c-.1.25-.18.57-.22 1.08q-.04.48-.04 1.15h14.98q0-.66-.04-1.15a4 4 0 0 0-.22-1.08 3 3 0 0 0-1.5-1.5 3 3 0 0 0-.73-.18V6a1 1 0 1 1-2 0V5H9" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarXBold.displayName = 'CalendarXBold';

// Triple export pattern (lucide-react style)
export { CalendarXBold, CalendarXBold as CalendarXBoldIcon, CalendarXBold as SiCalendarXBold };
export type { CalendarXBoldProps };
