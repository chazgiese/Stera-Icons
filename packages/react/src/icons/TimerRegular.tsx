import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TimerRegularProps = Omit<IconBaseProps, 'children'>;

const TimerRegular = memo(
  forwardRef<SVGSVGElement, TimerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25A10.75 10.75 0 1 1 4.4 4.4a.75.75 0 0 1 1.06 1.06 9.25 9.25 0 1 0 7.3-2.68V5.5a.75.75 0 0 1-1.51 0V2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M6.52 6.52c.25-.25.64-.3.94-.1l5.48 3.54c.31.2.91.58 1.16 1.24a2.25 2.25 0 0 1-2.9 2.9c-.66-.25-1.03-.85-1.24-1.17L6.42 7.46l-.06-.12a.8.8 0 0 1 .16-.82" />
    </IconBase>
  ))
);

TimerRegular.displayName = 'TimerRegular';

// Triple export pattern (lucide-react style)
export { TimerRegular, TimerRegular as TimerRegularIcon, TimerRegular as SiTimerRegular };
export type { TimerRegularProps };
