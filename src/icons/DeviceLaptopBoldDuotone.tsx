import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceLaptopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopBoldDuotone = memo(
  forwardRef<SVGSVGElement, DeviceLaptopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop-bold-duotone" {...props}>
      <path fill="currentColor" d="m20.5 14.41.18.35 1.2 3a2 2 0 0 1-1.86 2.74H3.98a2 2 0 0 1-1.86-2.74l1.2-3 .18-.35v.09a1 1 0 0 0 1 1h.68l-1.2 3h16.04l-1.2-3h.68a1 1 0 0 0 1-1z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.3 3.5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v6.8a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V7.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-8.6 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v5.8h13V7.7c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09c-.28-.02-.65-.02-1.23-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceLaptopBoldDuotone.displayName = 'DeviceLaptopBoldDuotone';

// Triple export pattern (lucide-react style)
export { DeviceLaptopBoldDuotone, DeviceLaptopBoldDuotone as DeviceLaptopBoldDuotoneIcon, DeviceLaptopBoldDuotone as SiDeviceLaptopBoldDuotone };
export default DeviceLaptopBoldDuotone;
export type { DeviceLaptopBoldDuotoneProps };
