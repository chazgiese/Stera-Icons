import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m0 3.5a1 1 0 0 0-1 1v3H8.5a1 1 0 1 0 0 2H12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M6.28 18.78a9 9 0 0 0 1.62 1.17l-1.07 1.6a1 1 0 0 1-1.66-1.1zM18.83 20.45a1 1 0 0 1-1.66 1.1l-1.07-1.6a9 9 0 0 0 1.62-1.17zM12 7.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11v-3a1 1 0 0 1 1-1M5.5 1.24a2.5 2.5 0 0 1 3.41.92 1 1 0 0 1-.36 1.36l-2.6 1.5a1 1 0 0 1-1.37-.36 2.5 2.5 0 0 1 .92-3.42M15.08 2.16a2.5 2.5 0 1 1 4.33 2.5 1 1 0 0 1-1.36.36l-2.6-1.5a1 1 0 0 1-.37-1.36" />
    </IconBase>
  ))
);

AlarmClockFillDuotone.displayName = 'AlarmClockFillDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockFillDuotone, AlarmClockFillDuotone as AlarmClockFillDuotoneIcon, AlarmClockFillDuotone as SiAlarmClockFillDuotone };
export default AlarmClockFillDuotone;
export type { AlarmClockFillDuotoneProps };
