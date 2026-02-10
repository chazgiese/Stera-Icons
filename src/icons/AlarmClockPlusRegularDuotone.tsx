import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-plus-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.6 18.74a8 8 0 0 0 1.22.87l-1.2 1.8a.75.75 0 0 1-1.24-.83zM18.62 20.58a.75.75 0 0 1-1.24.84l-1.2-1.8a8 8 0 0 0 1.21-.88zM12 8.75c.41 0 .75.34.75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9.5c0-.41.34-.75.75-.75M5.63 1.46a2.25 2.25 0 0 1 3.07.82c.2.36.08.82-.28 1.03l-2.6 1.5a.75.75 0 0 1-1.02-.28 2.25 2.25 0 0 1 .83-3.07M15.3 2.28a2.25 2.25 0 0 1 3.9 2.25.75.75 0 0 1-1.03.28l-2.6-1.5a.75.75 0 0 1-.27-1.03" />
    </IconBase>
  ))
);

AlarmClockPlusRegularDuotone.displayName = 'AlarmClockPlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockPlusRegularDuotone, AlarmClockPlusRegularDuotone as AlarmClockPlusRegularDuotoneIcon, AlarmClockPlusRegularDuotone as SiAlarmClockPlusRegularDuotone };
export default AlarmClockPlusRegularDuotone;
export type { AlarmClockPlusRegularDuotoneProps };
