import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusRegularProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusRegular = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-minus" {...props}>
      <path fill="currentColor" d="M15 11.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.25a8.25 8.25 0 0 1 5.4 14.49l1.22 1.84a.75.75 0 1 1-1.24.84l-1.2-1.8a8.2 8.2 0 0 1-8.36 0l-1.2 1.8a.75.75 0 1 1-1.24-.84l1.23-1.84A8.25 8.25 0 0 1 12 4.25m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
        <path fill="currentColor" d="M5.63 1.46a2.25 2.25 0 0 1 3.07.82c.2.36.08.82-.28 1.03l-2.6 1.5a.75.75 0 0 1-1.02-.28 2.25 2.25 0 0 1 .83-3.07M15.3 2.28a2.25 2.25 0 0 1 3.9 2.25.75.75 0 0 1-1.03.28l-2.6-1.5a.75.75 0 0 1-.27-1.03" />
    </IconBase>
  ))
);

AlarmClockMinusRegular.displayName = 'AlarmClockMinusRegular';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusRegular, AlarmClockMinusRegular as AlarmClockMinusRegularIcon, AlarmClockMinusRegular as SiAlarmClockMinusRegular };
export default AlarmClockMinusRegular;
export type { AlarmClockMinusRegularProps };
