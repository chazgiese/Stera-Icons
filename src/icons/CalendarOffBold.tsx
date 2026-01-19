import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarOffBoldProps = Omit<IconBaseProps, 'children'>;

const CalendarOffBold = memo(
  forwardRef<SVGSVGElement, CalendarOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="calendar-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-.75-.74a5 5 0 0 1-.78.5c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.18-2.19c-.3-.6-.43-1.23-.5-1.96q-.06-1.06-.05-2.71V9.96q-.01-1.34.06-2.27c.06-.73.18-1.37.49-1.96a5 5 0 0 1 .49-.78L2.29 3.71a1 1 0 0 1 0-1.42M4.5 11v3.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28l.25-.14L9.6 11zm.47-4.61-.14.25a3 3 0 0 0-.28 1.21q-.04.48-.04 1.15h3.08z" clipRule="evenodd" />
        <path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v1.08q.97.07 1.77.46a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.07.92.06 2.27v4.64l-.01 1.67a1 1 0 0 1-2-.04l.01-1.63V11h-5.26a1 1 0 1 1 0-2h5.25q0-.66-.04-1.15a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31c-.21-.1-.47-.19-.87-.24V6a1 1 0 0 1-2 0V5H9.9l-1.63.01a1 1 0 1 1-.05-2L9.9 3H15V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarOffBold.displayName = 'CalendarOffBold';

// Triple export pattern (lucide-react style)
export { CalendarOffBold, CalendarOffBold as CalendarOffBoldIcon, CalendarOffBold as SiCalendarOffBold };
export default CalendarOffBold;
export type { CalendarOffBoldProps };
