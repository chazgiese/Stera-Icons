import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockFillProps = Omit<IconBaseProps, 'children'>;

const AlarmClockFill = memo(
  forwardRef<SVGSVGElement, AlarmClockFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a8.5 8.5 0 0 1 5.72 14.78l1.11 1.67a1 1 0 0 1-1.66 1.1l-1.07-1.6a8.5 8.5 0 0 1-8.2 0l-1.07 1.6a1 1 0 1 1-1.66-1.1l1.1-1.67A8.5 8.5 0 0 1 12 4m0 3.5a1 1 0 0 0-1 1v3H8.5a1 1 0 0 0 0 2H12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" clipRule="evenodd" />
        <path fill="currentColor" d="M5.5 1.24a2.5 2.5 0 0 1 3.42.92 1 1 0 0 1-.37 1.36l-2.6 1.5a1 1 0 0 1-1.37-.36 2.5 2.5 0 0 1 .92-3.42M15.09 2.16a2.5 2.5 0 1 1 4.32 2.5 1 1 0 0 1-1.36.36l-2.6-1.5a1 1 0 0 1-.36-1.36" />
    </IconBase>
  ))
);

AlarmClockFill.displayName = 'AlarmClockFill';

// Triple export pattern (lucide-react style)
export { AlarmClockFill, AlarmClockFill as AlarmClockFillIcon, AlarmClockFill as SiAlarmClockFill };
export default AlarmClockFill;
export type { AlarmClockFillProps };
