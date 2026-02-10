import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.6 18.74a8 8 0 0 0 1.22.87l-1.2 1.8a.75.75 0 0 1-1.24-.83zM18.62 20.58a.75.75 0 0 1-1.24.84l-1.2-1.8a8 8 0 0 0 1.21-.88zM12 7.75c.41 0 .75.34.75.75v4c0 .39-.3.7-.67.75H8.5a.75.75 0 0 1 0-1.5h2.75V8.5c0-.41.34-.75.75-.75M5.62 1.46a2.25 2.25 0 0 1 3.08.82c.2.36.08.82-.28 1.03l-2.6 1.5a.75.75 0 0 1-1.02-.28 2.25 2.25 0 0 1 .82-3.07M15.3 2.28a2.25 2.25 0 0 1 3.9 2.25.75.75 0 0 1-1.03.28l-2.6-1.5a.75.75 0 0 1-.27-1.03" />
    </IconBase>
  ))
);

AlarmClockRegularDuotone.displayName = 'AlarmClockRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockRegularDuotone, AlarmClockRegularDuotone as AlarmClockRegularDuotoneIcon, AlarmClockRegularDuotone as SiAlarmClockRegularDuotone };
export default AlarmClockRegularDuotone;
export type { AlarmClockRegularDuotoneProps };
