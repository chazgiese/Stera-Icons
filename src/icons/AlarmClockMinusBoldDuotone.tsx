import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlarmClockMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-minus-bold-duotone" {...props}>
      <path fill="currentColor" d="M5.75 19.47q.7.7 1.58 1.22l-1.55 1.93a1 1 0 0 1-1.56-1.25zM19.78 21.37a1 1 0 0 1-1.56 1.25l-1.55-1.93q.87-.53 1.58-1.22zM5.25 1.33a2.5 2.5 0 0 1 3.42.92l.04.1a1 1 0 0 1-.41 1.27l-2.6 1.5a1 1 0 0 1-1.36-.37 2.5 2.5 0 0 1 .91-3.42M15.34 2.25a2.5 2.5 0 0 1 4.33 2.5l-.06.09a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.36-1.37M15.1 12a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h6.1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

AlarmClockMinusBoldDuotone.displayName = 'AlarmClockMinusBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusBoldDuotone, AlarmClockMinusBoldDuotone as AlarmClockMinusBoldDuotoneIcon, AlarmClockMinusBoldDuotone as SiAlarmClockMinusBoldDuotone };
export default AlarmClockMinusBoldDuotone;
export type { AlarmClockMinusBoldDuotoneProps };
