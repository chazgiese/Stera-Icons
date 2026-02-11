import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-bold-duotone" {...props}>
      <path d="M18.5 12.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0m2 0a8.5 8.5 0 1 1-16.98.01 8.5 8.5 0 0 1 16.98-.01" opacity={.4} />
        <path d="M6.28 18.78a9 9 0 0 0 1.62 1.17l-1.07 1.6a1 1 0 0 1-1.66-1.1zM18.83 20.45a1 1 0 0 1-1.66 1.1l-1.07-1.6a9 9 0 0 0 1.62-1.17zM12 8.5a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1M5.5 1.24a2.5 2.5 0 0 1 3.41.92 1 1 0 0 1-.36 1.36l-2.6 1.5a1 1 0 0 1-1.37-.36 2.5 2.5 0 0 1 .92-3.42M15.08 2.16a2.5 2.5 0 0 1 4.33 2.5 1 1 0 0 1-1.36.36l-2.6-1.5a1 1 0 0 1-.37-1.36" />
    </IconBase>
  ))
);

AlarmClockPlusBoldDuotone.displayName = 'AlarmClockPlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusBoldDuotone, AlarmClockPlusBoldDuotone as AlarmClockPlusBoldDuotoneIcon, AlarmClockPlusBoldDuotone as SiAlarmClockPlusBoldDuotone };
export default AlarmClockPlusBoldDuotone;
export type { AlarmClockPlusBoldDuotoneProps };
