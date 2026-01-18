import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarBlankBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankBold = memo(
  forwardRef<SVGSVGElement, CalendarBlankBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-4.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19q.8-.39 1.77-.46V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M4.5 11v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V11zM9 5v1a1 1 0 1 1-2 0v-.91c-.4.05-.66.13-.86.24a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22q-.04.48-.04 1.15h14.98q0-.66-.04-1.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24V6a1 1 0 1 1-2 0V5H9" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarBlankBold.displayName = 'CalendarBlankBold';

// Triple export pattern (lucide-react style)
export { CalendarBlankBold, CalendarBlankBold as CalendarBlankBoldIcon, CalendarBlankBold as SiCalendarBlankBold };
export type { CalendarBlankBoldProps };
