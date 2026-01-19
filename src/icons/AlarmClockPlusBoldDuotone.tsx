import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlarmClockPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M5.75 19.47q.7.7 1.58 1.22l-1.55 1.93a1 1 0 0 1-1.56-1.25zM19.78 21.37a1 1 0 0 1-1.56 1.25l-1.55-1.93q.87-.53 1.58-1.22zM12 8.5a1 1 0 0 1 1 1V12h2.5a1 1 0 0 1 0 2H13v2.5a1 1 0 0 1-2 0V14H8.5a1 1 0 1 1 0-2H11V9.5a1 1 0 0 1 1-1M5.25 1.33a2.5 2.5 0 0 1 3.42.92l.04.1a1 1 0 0 1-.41 1.27l-2.6 1.5a1 1 0 0 1-1.36-.37 2.5 2.5 0 0 1 .91-3.42M15.34 2.25a2.5 2.5 0 0 1 4.33 2.5l-.06.09a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.36-1.37" />
    </IconBase>
  ))
);

AlarmClockPlusBoldDuotone.displayName = 'AlarmClockPlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusBoldDuotone, AlarmClockPlusBoldDuotone as AlarmClockPlusBoldDuotoneIcon, AlarmClockPlusBoldDuotone as SiAlarmClockPlusBoldDuotone };
export default AlarmClockPlusBoldDuotone;
export type { AlarmClockPlusBoldDuotoneProps };
