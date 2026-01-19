import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlarmClockMinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alarm-clock-minus-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.08 19.44q.55.51 1.2.92l-1.7 2.1a.75.75 0 0 1-1.17-.93zM19.59 21.53a.75.75 0 0 1-1.18.94l-1.68-2.11q.63-.4 1.19-.92zM15 12.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM15.55 2.37a2.25 2.25 0 0 1 3.9 2.25l-.04.07c-.23.3-.65.4-.99.2l-2.6-1.5a.75.75 0 0 1-.27-1.02M5.38 1.55a2.25 2.25 0 0 1 3.07.82l.03.07c.16.35.03.77-.3.96l-2.6 1.5a.75.75 0 0 1-1.03-.28 2.25 2.25 0 0 1 .83-3.07" />
    </IconBase>
  ))
);

AlarmClockMinusRegularDuotone.displayName = 'AlarmClockMinusRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlarmClockMinusRegularDuotone, AlarmClockMinusRegularDuotone as AlarmClockMinusRegularDuotoneIcon, AlarmClockMinusRegularDuotone as SiAlarmClockMinusRegularDuotone };
export type { AlarmClockMinusRegularDuotoneProps };
