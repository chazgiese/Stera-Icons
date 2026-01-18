import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlarmClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a9 9 0 0 1 6.36 15.36l-.1.1q-.35.35-.74.65l-.04.02q-.18.15-.39.29l-.42.27a8.96 8.96 0 0 1-10.92-1.22A9 9 0 0 1 12 4m0 3.5a1 1 0 0 0-1 1V12H8.5a1 1 0 0 0 0 2H12a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M5.74 19.47q.72.7 1.59 1.22l-1.55 1.93a1 1 0 0 1-1.56-1.25zM19.78 21.37a1 1 0 0 1-1.56 1.25l-1.55-1.93q.87-.53 1.58-1.22zM12 7.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11V8.5a1 1 0 0 1 1-1M5.25 1.33a2.5 2.5 0 0 1 3.42.92l.04.1a1 1 0 0 1-.41 1.27l-2.6 1.5a1 1 0 0 1-1.36-.37 2.5 2.5 0 0 1 .91-3.42M15.34 2.25a2.5 2.5 0 0 1 4.33 2.5l-.06.09a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.36-1.37" />
    </IconBase>
  ))
);

AlarmClockFillDuotone.displayName = 'AlarmClockFillDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockFillDuotone, AlarmClockFillDuotone as AlarmClockFillDuotoneIcon, AlarmClockFillDuotone as SiAlarmClockFillDuotone };
export type { AlarmClockFillDuotoneProps };
