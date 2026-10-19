import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusFillProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusFill = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.25c4.56 0 8.25 3.7 8.25 8.25 0 2.5-1.1 4.73-2.86 6.24l1.23 1.84c.23.35.14.81-.2 1.04s-.81.14-1.04-.2l-1.2-1.8c-1.23.71-2.66 1.13-4.18 1.13s-2.95-.42-4.18-1.14l-1.2 1.8c-.23.35-.7.44-1.04.21s-.43-.7-.2-1.04l1.23-1.84c-1.75-1.51-2.86-3.75-2.86-6.24 0-4.56 3.7-8.25 8.25-8.25m-3 7.38c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
        <path d="M5.63 1.46C6.7.84 8.07 1.2 8.7 2.28c.2.36.08.82-.28 1.03l-2.6 1.5c-.35.2-.81.08-1.02-.28-.62-1.07-.25-2.45.83-3.07M15.3 2.28c.62-1.07 2-1.44 3.07-.82 1.08.62 1.45 2 .83 3.07-.2.36-.67.48-1.03.28l-2.6-1.5c-.35-.21-.48-.67-.27-1.03" />
    </IconBase>
  ))
);

AlarmClockMinusFill.displayName = 'AlarmClockMinusFill';

// Triple export pattern
export { AlarmClockMinusFill, AlarmClockMinusFill as AlarmClockMinusFillIcon, AlarmClockMinusFill as SiAlarmClockMinusFill };
export default AlarmClockMinusFill;
export type { AlarmClockMinusFillProps };
