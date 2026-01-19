import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceLaptopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopBoldDuotone = memo(
  forwardRef<SVGSVGElement, DeviceLaptopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 15a1 1 0 0 0 1 1h.68l-1.2 3h17.04l-1.2-3H20a1 1 0 0 0 1-1v-.09l.18.35 1.2 3A2 2 0 0 1 20.52 21H3.48a2 2 0 0 1-1.86-2.74l1.2-3L3 14.9z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.8 3q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4 2.99 7.2 3zM7.2 5c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C5 6.25 5 6.62 5 7.2V14h14V7.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C17.75 5 17.38 5 16.8 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceLaptopBoldDuotone.displayName = 'DeviceLaptopBoldDuotone';

// Triple export pattern (lucide-react style)
export { DeviceLaptopBoldDuotone, DeviceLaptopBoldDuotone as DeviceLaptopBoldDuotoneIcon, DeviceLaptopBoldDuotone as SiDeviceLaptopBoldDuotone };
export default DeviceLaptopBoldDuotone;
export type { DeviceLaptopBoldDuotoneProps };
