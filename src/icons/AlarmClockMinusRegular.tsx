import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusRegularProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusRegular = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-minus" {...props}>
      <path fill="currentColor" d="M15 12.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.25a8.75 8.75 0 0 1 5.92 15.2l1.67 2.08a.75.75 0 0 1-1.18.94l-1.68-2.11a8.7 8.7 0 0 1-9.46 0l-1.68 2.1a.75.75 0 0 1-1.18-.93l1.67-2.08A8.75 8.75 0 0 1 12 4.25m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" />
        <path fill="currentColor" d="M15.55 2.37a2.25 2.25 0 0 1 3.9 2.25l-.04.07c-.23.3-.65.4-.99.2l-2.6-1.5a.75.75 0 0 1-.27-1.02M5.38 1.55a2.25 2.25 0 0 1 3.07.82l.03.07c.16.35.03.77-.3.96l-2.6 1.5a.75.75 0 0 1-1.03-.28 2.25 2.25 0 0 1 .83-3.07" />
    </IconBase>
  ))
);

AlarmClockMinusRegular.displayName = 'AlarmClockMinusRegular';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusRegular, AlarmClockMinusRegular as AlarmClockMinusRegularIcon, AlarmClockMinusRegular as SiAlarmClockMinusRegular };
export default AlarmClockMinusRegular;
export type { AlarmClockMinusRegularProps };
