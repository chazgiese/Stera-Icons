import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerBoldProps = Omit<IconBaseProps, 'children'>;

const TimerBold = memo(
  forwardRef<SVGSVGElement, TimerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="timer-bold" {...props}>
      <path d="M12 2a10 10 0 1 1-7.07 2.93 1 1 0 0 1 1.41 1.41A8 8 0 1 0 13 4.06V6.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
        <path d="M7.58 7.58c.24-.24.6-.29.9-.12l4.95 2.83q.09.04.16.12a2.25 2.25 0 0 1-3.18 3.18l-.12-.16-2.83-4.95a.75.75 0 0 1 .12-.9" />
    </IconBase>
  ))
);

TimerBold.displayName = 'TimerBold';

// Triple export pattern (lucide-react style)
export { TimerBold, TimerBold as TimerBoldIcon, TimerBold as SiTimerBold };
export default TimerBold;
export type { TimerBoldProps };
