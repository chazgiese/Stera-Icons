import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TimerFillProps = Omit<IconBaseProps, 'children'>;

const TimerFill = memo(
  forwardRef<SVGSVGElement, TimerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 .5a11.5 11.5 0 1 1-8.13 3.37 1.5 1.5 0 0 1 2.12 2.12 8.5 8.5 0 1 0 7.51-2.36V5.5a1.5 1.5 0 0 1-3 0V2c0-.83.67-1.5 1.5-1.5" />
        <path d="M6.34 6.34a1 1 0 0 1 1.25-.13l5.48 3.54c.3.2.98.61 1.27 1.36a2.5 2.5 0 0 1-3.22 3.23c-.76-.29-1.17-.97-1.37-1.27L6.21 7.59l-.04-.07a1 1 0 0 1 .17-1.18" />
    </IconBase>
  ))
);

TimerFill.displayName = 'TimerFill';

// Triple export pattern (lucide-react style)
export { TimerFill, TimerFill as TimerFillIcon, TimerFill as SiTimerFill };
export type { TimerFillProps };
