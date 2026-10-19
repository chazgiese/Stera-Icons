import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 11.5c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path fillRule="evenodd" d="M12 4c4.7 0 8.5 3.8 8.5 8.5 0 2.49-1.07 4.73-2.78 6.28l1.11 1.66c.3.46.18 1.09-.28 1.4-.45.3-1.08.17-1.38-.29l-1.07-1.6C14.88 20.62 13.48 21 12 21s-2.88-.38-4.1-1.05l-1.07 1.6c-.3.46-.93.59-1.38.28-.46-.3-.59-.93-.28-1.39l1.1-1.66c-1.7-1.55-2.77-3.8-2.77-6.28C3.5 7.8 7.3 4 12 4m0 2c-3.59 0-6.5 2.91-6.5 6.5 0 2.17 1.06 4.09 2.7 5.27C9.27 18.54 10.58 19 12 19s2.73-.46 3.8-1.23c1.64-1.18 2.7-3.1 2.7-5.27C18.5 8.91 15.59 6 12 6" clipRule="evenodd" />
        <path d="M5.5 1.24c1.2-.69 2.72-.28 3.42.92.27.48.1 1.09-.37 1.36l-2.6 1.5c-.48.28-1.09.11-1.37-.36-.69-1.2-.28-2.73.92-3.42M15.09 2.16c.69-1.2 2.21-1.6 3.41-.92 1.2.7 1.6 2.22.91 3.42-.27.47-.88.64-1.36.36l-2.6-1.5c-.48-.27-.64-.88-.36-1.36" />
    </IconBase>
  ))
);

AlarmClockMinusBoldDuotone.displayName = 'AlarmClockMinusBoldDuotone';

// Triple export pattern
export { AlarmClockMinusBoldDuotone, AlarmClockMinusBoldDuotone as AlarmClockMinusBoldDuotoneIcon, AlarmClockMinusBoldDuotone as SiAlarmClockMinusBoldDuotone };
export default AlarmClockMinusBoldDuotone;
export type { AlarmClockMinusBoldDuotoneProps };
