import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.75c.42 0 .75.34.75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 1 1-1.5 0v-2.75H8.5a.75.75 0 0 1 0-1.5h2.75V9.5c0-.4.34-.75.75-.75M15.55 2.37a2.25 2.25 0 0 1 3.9 2.25l-.04.07c-.23.3-.65.4-.99.2l-2.6-1.5a.75.75 0 0 1-.27-1.02M5.37 1.55a2.25 2.25 0 0 1 3.08.82l.03.07c.16.35.03.77-.3.96l-2.6 1.5a.75.75 0 0 1-1.03-.28 2.25 2.25 0 0 1 .82-3.07M6.08 19.44q.55.51 1.2.92l-1.7 2.1a.75.75 0 0 1-1.17-.93zM19.59 21.53a.75.75 0 0 1-1.18.94l-1.68-2.11q.63-.4 1.19-.92z" />
    </IconBase>
  ))
);

AlarmClockPlusRegularDuotone.displayName = 'AlarmClockPlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusRegularDuotone, AlarmClockPlusRegularDuotone as AlarmClockPlusRegularDuotoneIcon, AlarmClockPlusRegularDuotone as SiAlarmClockPlusRegularDuotone };
export default AlarmClockPlusRegularDuotone;
export type { AlarmClockPlusRegularDuotoneProps };
