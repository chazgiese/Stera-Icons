import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.75c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75V8.5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fillRule="evenodd" d="M12 4.25c4.56 0 8.25 3.7 8.25 8.25 0 2.5-1.1 4.73-2.86 6.24l1.23 1.84c.23.35.14.81-.2 1.04s-.81.14-1.04-.2l-1.2-1.8c-1.23.71-2.66 1.13-4.18 1.13s-2.95-.42-4.18-1.14l-1.2 1.8c-.23.35-.7.44-1.04.21s-.43-.7-.2-1.04l1.23-1.84c-1.75-1.51-2.86-3.75-2.86-6.24 0-4.56 3.7-8.25 8.25-8.25m0 1.5c-3.73 0-6.75 3.02-6.75 6.75 0 2.25 1.1 4.25 2.8 5.47 1.11.8 2.47 1.28 3.95 1.28s2.84-.47 3.95-1.28c1.7-1.22 2.8-3.22 2.8-5.47 0-3.73-3.02-6.75-6.75-6.75" clipRule="evenodd" />
        <path d="M5.63 1.46C6.7.84 8.07 1.2 8.7 2.28c.2.36.08.82-.28 1.03l-2.6 1.5c-.35.2-.81.08-1.02-.28-.62-1.07-.25-2.45.83-3.07M15.3 2.28c.62-1.07 2-1.44 3.07-.82 1.08.62 1.45 2 .83 3.07-.2.36-.67.48-1.03.28l-2.6-1.5c-.35-.21-.48-.67-.27-1.03" />
    </IconBase>
  ))
);

AlarmClockRegularDuotone.displayName = 'AlarmClockRegularDuotone';

// Triple export pattern
export { AlarmClockRegularDuotone, AlarmClockRegularDuotone as AlarmClockRegularDuotoneIcon, AlarmClockRegularDuotone as SiAlarmClockRegularDuotone };
export default AlarmClockRegularDuotone;
export type { AlarmClockRegularDuotoneProps };
