import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerFillProps = Omit<IconBaseProps, 'children'>;

const TimerFill = memo(
  forwardRef<SVGSVGElement, TimerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="timer-fill" {...props}>
      <path d="M12 1.5a10.5 10.5 0 1 1-7.42 3.08A1.5 1.5 0 0 1 6.7 6.7a7.5 7.5 0 1 0 6.8-2.05V6.5a1.5 1.5 0 0 1-3 0V3c0-.83.67-1.5 1.5-1.5" />
        <path d="M7.58 7.58c.24-.24.6-.29.9-.12l4.95 2.83q.09.04.16.12a2.25 2.25 0 0 1-3.18 3.18l-.12-.16-2.83-4.95a.75.75 0 0 1 .12-.9" />
    </IconBase>
  ))
);

TimerFill.displayName = 'TimerFill';

// Triple export pattern (lucide-react style)
export { TimerFill, TimerFill as TimerFillIcon, TimerFill as SiTimerFill };
export default TimerFill;
export type { TimerFillProps };
