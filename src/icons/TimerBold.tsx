import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerBoldProps = Omit<IconBaseProps, 'children'>;

const TimerBold = memo(
  forwardRef<SVGSVGElement, TimerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="timer-bold" {...props}>
      <path fill="currentColor" d="M12 1a11 11 0 1 1-7.78 3.22 1 1 0 0 1 1.42 1.42A9 9 0 1 0 13 3.06V5.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M6.52 6.52c.25-.25.64-.3.94-.1l5.48 3.54c.31.2.91.58 1.16 1.24a2.25 2.25 0 0 1-2.9 2.9c-.66-.25-1.03-.85-1.24-1.17L6.42 7.46l-.06-.12a.8.8 0 0 1 .16-.82" />
    </IconBase>
  ))
);

TimerBold.displayName = 'TimerBold';

// Triple export pattern (lucide-react style)
export { TimerBold, TimerBold as TimerBoldIcon, TimerBold as SiTimerBold };
export default TimerBold;
export type { TimerBoldProps };
