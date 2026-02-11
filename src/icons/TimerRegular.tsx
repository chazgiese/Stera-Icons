import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TimerRegularProps = Omit<IconBaseProps, 'children'>;

const TimerRegular = memo(
  forwardRef<SVGSVGElement, TimerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="timer" {...props}>
      <path d="M12 2.25a9.75 9.75 0 1 1-6.9 2.86.75.75 0 0 1 1.07 1.06 8.25 8.25 0 1 0 6.58-2.38V6.5a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" />
        <path d="M7.76 7.76a.5.5 0 0 1 .6-.08l4.95 2.82.1.09a2 2 0 0 1-2.82 2.82l-.09-.1-2.82-4.95a.5.5 0 0 1 .08-.6" />
    </IconBase>
  ))
);

TimerRegular.displayName = 'TimerRegular';

// Triple export pattern (lucide-react style)
export { TimerRegular, TimerRegular as TimerRegularIcon, TimerRegular as SiTimerRegular };
export default TimerRegular;
export type { TimerRegularProps };
