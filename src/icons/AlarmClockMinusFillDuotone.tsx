import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-minus-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m-3 7.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.28 18.78a9 9 0 0 0 1.62 1.17l-1.07 1.6a1 1 0 0 1-1.66-1.1zM18.83 20.44a1 1 0 0 1-1.66 1.11l-1.07-1.6a9 9 0 0 0 1.62-1.17zM15 11.5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zM5.5 1.24a2.5 2.5 0 0 1 3.41.92 1 1 0 0 1-.36 1.36l-2.6 1.5a1 1 0 0 1-1.37-.36 2.5 2.5 0 0 1 .92-3.42M15.08 2.16a2.5 2.5 0 0 1 4.33 2.5 1 1 0 0 1-1.36.36l-2.6-1.5a1 1 0 0 1-.37-1.36" />
    </IconBase>
  ))
);

AlarmClockMinusFillDuotone.displayName = 'AlarmClockMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusFillDuotone, AlarmClockMinusFillDuotone as AlarmClockMinusFillDuotoneIcon, AlarmClockMinusFillDuotone as SiAlarmClockMinusFillDuotone };
export default AlarmClockMinusFillDuotone;
export type { AlarmClockMinusFillDuotoneProps };
