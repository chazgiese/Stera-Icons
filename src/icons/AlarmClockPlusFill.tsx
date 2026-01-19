import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlarmClockPlusFillProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusFill = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a9 9 0 0 1 6.25 15.47l1.53 1.9a1 1 0 0 1-1.56 1.25l-1.55-1.93a9 9 0 0 1-9.34 0l-1.55 1.93a1 1 0 0 1-1.56-1.25l1.52-1.9A9 9 0 0 1 12 4m0 4.5a1 1 0 0 0-1 1V12H8.5a1 1 0 0 0 0 2H11v2.5a1 1 0 1 0 2 0V14h2.5a1 1 0 1 0 0-2H13V9.5a1 1 0 0 0-1-1" clipRule="evenodd" />
        <path fill="currentColor" d="M5.25 1.33a2.5 2.5 0 0 1 3.42.92l.04.1a1 1 0 0 1-.41 1.27l-2.6 1.5a1 1 0 0 1-1.37-.37 2.5 2.5 0 0 1 .92-3.42M15.34 2.25a2.5 2.5 0 0 1 4.32 2.5l-.05.09a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.36-1.37" />
    </IconBase>
  ))
);

AlarmClockPlusFill.displayName = 'AlarmClockPlusFill';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusFill, AlarmClockPlusFill as AlarmClockPlusFillIcon, AlarmClockPlusFill as SiAlarmClockPlusFill };
export type { AlarmClockPlusFillProps };
