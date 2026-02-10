import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TimerRegularDuotone = memo(
  forwardRef<SVGSVGElement, TimerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="timer-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25a9.75 9.75 0 1 1-6.9 2.86.75.75 0 0 1 1.07 1.06 8.25 8.25 0 1 0 6.58-2.38V6.5a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M7.76 7.76a.5.5 0 0 1 .6-.08l4.95 2.83.1.08a2 2 0 0 1-2.82 2.82l-.09-.1-2.82-4.95a.5.5 0 0 1 .08-.6" />
    </IconBase>
  ))
);

TimerRegularDuotone.displayName = 'TimerRegularDuotone';

// Triple export pattern (lucide-react style)
export { TimerRegularDuotone, TimerRegularDuotone as TimerRegularDuotoneIcon, TimerRegularDuotone as SiTimerRegularDuotone };
export default TimerRegularDuotone;
export type { TimerRegularDuotoneProps };
