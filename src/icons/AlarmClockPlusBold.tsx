import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusBoldProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusBold = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-bold" {...props}>
      <path fill="currentColor" d="M12 8.5a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4a8.5 8.5 0 0 1 5.72 14.78l1.11 1.67a1 1 0 0 1-1.66 1.1l-1.07-1.6a8.5 8.5 0 0 1-8.2 0l-1.07 1.6a1 1 0 1 1-1.66-1.1l1.1-1.67A8.5 8.5 0 0 1 12 4m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" />
        <path fill="currentColor" d="M5.5 1.24a2.5 2.5 0 0 1 3.42.92 1 1 0 0 1-.37 1.36l-2.6 1.5a1 1 0 0 1-1.37-.36 2.5 2.5 0 0 1 .92-3.42M15.09 2.16a2.5 2.5 0 1 1 4.32 2.5 1 1 0 0 1-1.36.36l-2.6-1.5a1 1 0 0 1-.36-1.36" />
    </IconBase>
  ))
);

AlarmClockPlusBold.displayName = 'AlarmClockPlusBold';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusBold, AlarmClockPlusBold as AlarmClockPlusBoldIcon, AlarmClockPlusBold as SiAlarmClockPlusBold };
export default AlarmClockPlusBold;
export type { AlarmClockPlusBoldProps };
